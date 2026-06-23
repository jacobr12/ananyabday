import type { Connection, HouseRoom } from "@/content/rooms";
import { FLOOR_INSET, HOUSE_HEIGHT, HOUSE_WIDTH } from "@/lib/constants";
import { STAIR_ZONE, inStairZone } from "@/lib/houseLayout";

const CEILING = 72;
const PADDING = 8;
/** Horizontal line between upstairs and downstairs */
export const FLOOR_DIVIDER = 260;

export function getFloorY(room: HouseRoom): number {
  return room.bounds.y + room.bounds.h - FLOOR_INSET;
}

export function inConnection(x: number, y: number, c: Connection): boolean {
  const z = c.zone;
  return x >= z.x && x < z.x + z.w && y >= z.y && y < z.y + z.h;
}

export function getAllConnections(rooms: HouseRoom[]): Connection[] {
  return rooms.flatMap((r) => r.connections ?? []);
}

export function resolveRoomAt(
  x: number,
  y: number,
  rooms: HouseRoom[]
): HouseRoom | undefined {
  if (inStairZone(x, y)) {
    if (y < FLOOR_DIVIDER + 50) {
      return rooms.find((r) => r.id === "fun-facts");
    }
      return rooms.find((r) => r.id === "family");
  }

  for (const room of rooms) {
    const b = room.bounds;
    if (x >= b.x && x < b.x + b.w && y >= b.y && y < b.y + b.h) {
      return room;
    }
  }

  if (y < FLOOR_DIVIDER) {
    return rooms.find((r) => (x < 480 ? r.id === "favorites" : r.id === "fun-facts"));
  }
  if (x < 320) return rooms.find((r) => r.id === "girlfriends");
  if (x < 640) return rooms.find((r) => r.id === "guyfriends");
      return rooms.find((r) => r.id === "family");
}

/**
 * Free movement inside the house. The only hard rule: you cannot cross the
 * upstairs/downstairs divider unless you are in (or just stepped from) the
 * stair column on the right.
 */
export function applyMovement(
  prevX: number,
  prevY: number,
  nx: number,
  ny: number
): { x: number; y: number } {
  const x = Math.max(PADDING, Math.min(HOUSE_WIDTH - PADDING, nx));
  let y = Math.max(CEILING, Math.min(HOUSE_HEIGHT - PADDING, ny));

  const onStairs =
    inStairZone(x, y) || inStairZone(prevX, prevY);

  if (!onStairs) {
    if (prevY < FLOOR_DIVIDER && y >= FLOOR_DIVIDER) {
      y = FLOOR_DIVIDER - 1;
    } else if (prevY >= FLOOR_DIVIDER && y < FLOOR_DIVIDER) {
      y = FLOOR_DIVIDER;
    }
  }

  return { x, y };
}

/** @deprecated use applyMovement */
export function clampToWorld(
  nx: number,
  ny: number,
  prevX: number,
  prevY: number
): { x: number; y: number } {
  return applyMovement(prevX, prevY, nx, ny);
}
