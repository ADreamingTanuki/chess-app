

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