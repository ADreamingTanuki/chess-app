import Coordinate from "./coordinate";

export function coordFromMove(move: string): Coordinate {
  const l = move.length;
  if(l <= 2) return new Coordinate(move);
  
  const coordStr = move.substring(l-2);
  return new Coordinate(coordStr);
}