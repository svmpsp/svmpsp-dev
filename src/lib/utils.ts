export interface Position {
  row: number;
  col: number;
}

export function positionIsEqual(pos: Position, other: Position): boolean {
  return pos.row === other.row && pos.col === other.col;
}
