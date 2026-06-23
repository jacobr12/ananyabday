"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  CHARACTER_SPEED,
  INTERACTION_RADIUS,
} from "@/lib/constants";
import { applyMovement, resolveRoomAt } from "@/lib/movement";
import { getTriviaAtPosition, type TriviaQuestion } from "@/content/triviaQuestions";
import {
  getItemById,
  getItemWorldPosition,
  getSpawnPosition,
  rooms,
  type HouseRoom,
  type Item,
} from "@/content/rooms";

type Facing = "left" | "right";

const KEY_VECTORS: Record<string, [number, number]> = {
  ArrowUp: [0, -1],
  ArrowDown: [0, 1],
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
  w: [0, -1],
  s: [0, 1],
  a: [-1, 0],
  d: [1, 0],
};

const MOVEMENT_KEYS = new Set(Object.keys(KEY_VECTORS));

type CharacterContextValue = {
  x: number;
  y: number;
  facing: Facing;
  isMoving: boolean;
  currentRoom: HouseRoom;
  activeItemId: string | null;
  triggerActive: () => void;
  openTrivia: () => void;
  setMovementEnabled: (v: boolean) => void;
  setTapTarget: (x: number, y: number) => void;
  isMobile: boolean;
};

const CharacterContext = createContext<CharacterContextValue | null>(null);

type ProviderProps = {
  children: ReactNode;
  onOpenItem: (item: Item) => void;
  onOpenTrivia: (question: TriviaQuestion) => void;
};

export function CharacterProvider({ children, onOpenItem, onOpenTrivia }: ProviderProps) {
  const spawn = getSpawnPosition();
  const [x, setX] = useState(spawn.x);
  const [y, setY] = useState(spawn.y);
  const [facing, setFacing] = useState<Facing>("right");
  const [isMoving, setIsMoving] = useState(false);
  const [currentRoom, setCurrentRoom] = useState<HouseRoom>(
    () => resolveRoomAt(spawn.x, spawn.y, rooms) ?? rooms[0]
  );
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const posRef = useRef({ x: spawn.x, y: spawn.y });
  const heldKeys = useRef(new Set<string>());
  const movementEnabled = useRef(true);
  const tapTarget = useRef<{ x: number; y: number } | null>(null);
  const onOpenItemRef = useRef(onOpenItem);
  const onOpenTriviaRef = useRef(onOpenTrivia);
  const triviaNonceRef = useRef(0);
  const currentRoomRef = useRef(currentRoom);

  useEffect(() => {
    currentRoomRef.current = currentRoom;
  }, [currentRoom]);

  onOpenItemRef.current = onOpenItem;
  onOpenTriviaRef.current = onOpenTrivia;

  const openTrivia = useCallback(() => {
    const room = currentRoomRef.current;
    if (room.id !== "fun-facts") return;
    const pos = posRef.current;
    const question = getTriviaAtPosition(
      pos.x,
      pos.y,
      room.bounds,
      triviaNonceRef.current++
    );
    onOpenTriviaRef.current(question);
  }, []);

  const setMovementEnabled = useCallback((v: boolean) => {
    movementEnabled.current = v;
    if (!v) {
      heldKeys.current.clear();
      tapTarget.current = null;
      setIsMoving(false);
    }
  }, []);

  const isMobileRef = useRef(false);
  useEffect(() => {
    isMobileRef.current = isMobile;
  }, [isMobile]);

  const setTapTarget = useCallback((tx: number, ty: number) => {
    if (!isMobileRef.current) return;
    tapTarget.current = { x: tx, y: ty };
    setIsMoving(true);
  }, []);

  const triggerActive = useCallback(() => {
    if (currentRoomRef.current.id === "fun-facts") {
      openTrivia();
      return;
    }
    if (!activeItemId) return;
    const item = getItemById(activeItemId);
    if (item) onOpenItemRef.current(item);
  }, [activeItemId, openTrivia]);

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    document.body.tabIndex = -1;
    document.body.focus({ preventScroll: true });

    const preventScroll = (e: KeyboardEvent) => {
      if (MOVEMENT_KEYS.has(e.key)) e.preventDefault();
    };
    window.addEventListener("keydown", preventScroll);
    return () => window.removeEventListener("keydown", preventScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!movementEnabled.current) return;
      if (MOVEMENT_KEYS.has(e.key)) {
        e.preventDefault();
        heldKeys.current.add(e.key);
      }
      if (e.key === " " || e.key === "Enter") {
        if (currentRoomRef.current.id === "fun-facts") {
          e.preventDefault();
          openTrivia();
          return;
        }
        if (activeItemId) {
          e.preventDefault();
          triggerActive();
        }
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      heldKeys.current.delete(e.key);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [activeItemId, triggerActive, openTrivia]);

  useEffect(() => {
    let frame: number;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (movementEnabled.current) {
        let dx = 0;
        let dy = 0;

        const tap = tapTarget.current;
        if (tap && isMobile) {
          const dist = Math.hypot(tap.x - posRef.current.x, tap.y - posRef.current.y);
          if (dist < 4) {
            tapTarget.current = null;
            setIsMoving(false);
          } else {
            const step = CHARACTER_SPEED * dt;
            const ratio = Math.min(step / dist, 1);
            dx = (tap.x - posRef.current.x) * ratio;
            dy = (tap.y - posRef.current.y) * ratio;
            setIsMoving(true);
          }
        } else if (!isMobile) {
          heldKeys.current.forEach((key) => {
            const v = KEY_VECTORS[key];
            if (v) {
              dx += v[0];
              dy += v[1];
            }
          });
          if (dx !== 0 || dy !== 0) {
            const len = Math.hypot(dx, dy) || 1;
            dx = (dx / len) * CHARACTER_SPEED * dt;
            dy = (dy / len) * CHARACTER_SPEED * dt;
            setIsMoving(true);
          } else {
            setIsMoving(false);
          }
        } else {
          setIsMoving(false);
        }

        if (dx !== 0 || dy !== 0) {
          if (dx < 0) setFacing("left");
          else if (dx > 0) setFacing("right");

          const prev = posRef.current;
          const nx = prev.x + dx;
          const ny = prev.y + dy;
          const next = applyMovement(prev.x, prev.y, nx, ny);

          posRef.current = { x: next.x, y: next.y };
          setX(next.x);
          setY(next.y);
        }

        const byPos = resolveRoomAt(posRef.current.x, posRef.current.y, rooms);
        if (byPos) setCurrentRoom(byPos);
      }

      const room = currentRoom;
      let closest: string | null = null;
      let minDist = INTERACTION_RADIUS;

      for (const item of room.items) {
        const wp = getItemWorldPosition(item, room);
        const d = Math.hypot(posRef.current.x - wp.x, posRef.current.y - wp.y);
        if (d < minDist) {
          minDist = d;
          closest = item.id;
        }
      }

      for (const item of room.items) {
        if (item.isSecret) {
          const wp = getItemWorldPosition(item, room);
          const d = Math.hypot(posRef.current.x - wp.x, posRef.current.y - wp.y);
          if (d < 24) closest = item.id;
        }
      }

      setActiveItemId(closest);

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [currentRoom, isMobile]);

  return (
    <CharacterContext.Provider
      value={{
        x,
        y,
        facing,
        isMoving,
        currentRoom,
        activeItemId,
        triggerActive,
        openTrivia,
        setMovementEnabled,
        setTapTarget,
        isMobile,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacter() {
  const ctx = useContext(CharacterContext);
  if (!ctx) throw new Error("useCharacter must be used within CharacterProvider");
  return ctx;
}
