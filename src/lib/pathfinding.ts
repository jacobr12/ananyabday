export function lerp(current: number, target: number, t: number): number {
  return current + (target - current) * t;
}

export function distance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.hypot(x2 - x1, y2 - y1);
}

export function moveToward(
  x: number,
  y: number,
  targetX: number,
  targetY: number,
  speed: number,
  dt: number
): { x: number; y: number; arrived: boolean } {
  const dist = distance(x, y, targetX, targetY);
  if (dist < 2) {
    return { x: targetX, y: targetY, arrived: true };
  }
  const step = speed * dt;
  const ratio = Math.min(step / dist, 1);
  return {
    x: x + (targetX - x) * ratio,
    y: y + (targetY - y) * ratio,
    arrived: ratio >= 1,
  };
}
