
import { JSX } from "react";

// probably not the final home for this piee of  code
// will I need a file for chess gamestate stuff?


export interface BoardDimensions {
  boardSize: number,
  cellSize: number
}

export function calcBoardDimensions(
 viewportWidth: number,
 viewportHeight: number,
 margin: number,
): BoardDimensions {
  let boardSize: number;

  if (viewportWidth <= viewportHeight) {
    boardSize = viewportWidth - 2 * margin;
  }
  else {
    boardSize = viewportHeight - 2 * margin;
  }

  const cellSize = boardSize / 8;
  return { boardSize, cellSize }
}

// export function renderPiecesFromGamestate(
//   gamestate: ChessTileState[][]
// ): JSX.Element[] {
//   let res: JSX.Element[] = new Array();
//   return res;
// }