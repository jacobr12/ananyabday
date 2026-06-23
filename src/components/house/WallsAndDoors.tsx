import { DOORWAYS, STAIR } from "@/lib/houseLayout";
import { HOUSE_HEIGHT, HOUSE_WIDTH } from "@/lib/constants";

const WOOD = "#c4a574";
const WOOD_DARK = "#8b7355";
const WALL = "#3d3228";

function DoorFrame({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const postW = 4;
  return (
    <g>
      <rect x={x} y={y} width={postW} height={h} fill={WOOD} stroke={WALL} strokeWidth="1" />
      <rect x={x + w - postW} y={y} width={postW} height={h} fill={WOOD} stroke={WALL} strokeWidth="1" />
      <rect x={x} y={y} width={w} height={postW} fill={WOOD} stroke={WALL} strokeWidth="1" />
    </g>
  );
}

export function WallsAndDoors() {
  const d = DOORWAYS;
  const stepH = (STAIR.bottomFloorY - STAIR.topFloorY) / STAIR.steps;
  const stepW = STAIR.w / STAIR.steps;

  return (
    <g>
      <line x1={0} y1={260} x2={STAIR.x} y2={260} stroke={WALL} strokeWidth={3.5} />

      <line x1={480} y1={0} x2={480} y2={d.upstairs.y} stroke={WALL} strokeWidth={3.5} />
      <line x1={480} y1={d.upstairs.y + d.upstairs.h} x2={480} y2={260} stroke={WALL} strokeWidth={3.5} />
      <DoorFrame x={d.upstairs.x} y={d.upstairs.y} w={d.upstairs.w} h={d.upstairs.h} />

      <line x1={320} y1={260} x2={320} y2={d.downLeft.y} stroke={WALL} strokeWidth={3.5} />
      <line x1={320} y1={d.downLeft.y + d.downLeft.h} x2={320} y2={HOUSE_HEIGHT} stroke={WALL} strokeWidth={3.5} />
      <DoorFrame x={d.downLeft.x} y={d.downLeft.y} w={d.downLeft.w} h={d.downLeft.h} />

      <line x1={640} y1={260} x2={640} y2={d.downRight.y} stroke={WALL} strokeWidth={3.5} />
      <line x1={640} y1={d.downRight.y + d.downRight.h} x2={640} y2={HOUSE_HEIGHT} stroke={WALL} strokeWidth={3.5} />
      <DoorFrame x={d.downRight.x} y={d.downRight.y} w={d.downRight.w} h={d.downRight.h} />

      <line x1={STAIR.x} y1={0} x2={STAIR.x} y2={STAIR.y} stroke={WALL} strokeWidth={3.5} />
      <line x1={STAIR.x} y1={STAIR.y + STAIR.h} x2={STAIR.x} y2={HOUSE_HEIGHT} stroke={WALL} strokeWidth={3.5} />

      {Array.from({ length: STAIR.steps }).map((_, i) => {
        const sx = STAIR.x + i * stepW;
        const sy = STAIR.topFloorY + i * stepH - 4;
        return (
          <rect
            key={i}
            x={sx}
            y={sy}
            width={stepW + 1}
            height={stepH + 2}
            fill={i % 2 === 0 ? "#a08060" : "#8b6914"}
            stroke={WALL}
            strokeWidth="0.8"
            opacity="0.92"
          />
        );
      })}
      <line x1={STAIR.x + 4} y1={STAIR.topFloorY - 20} x2={STAIR.x + 4} y2={STAIR.bottomFloorY + 8} stroke={WOOD_DARK} strokeWidth="2" />
      <line x1={STAIR.x + STAIR.w - 6} y1={STAIR.topFloorY - 12} x2={STAIR.x + STAIR.w - 6} y2={STAIR.bottomFloorY + 4} stroke={WOOD_DARK} strokeWidth="1.5" opacity="0.6" />

      <line x1={HOUSE_WIDTH} y1={0} x2={HOUSE_WIDTH} y2={HOUSE_HEIGHT} stroke={WALL} strokeWidth={2.5} />
    </g>
  );
}
