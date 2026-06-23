"use client";

import { useCallback, useEffect, useState } from "react";
import { VISITED_STORAGE_KEY } from "@/lib/constants";
import { allItems } from "@/content/rooms";

export function useVisitedItems() {
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(VISITED_STORAGE_KEY);
      if (raw) {
        setVisited(new Set(JSON.parse(raw) as string[]));
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const markVisited = useCallback((id: string) => {
    setVisited((prev) => {
      const next = new Set(prev);
      next.add(id);
      try {
        localStorage.setItem(
          VISITED_STORAGE_KEY,
          JSON.stringify([...next])
        );
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const allVisited =
    ready && visited.size >= allItems.length;

  return { visited, markVisited, allVisited, ready };
}
