
// react
import { CSSProperties, JSX } from "react";
// custom
import Coordinate from "../lib/coordinate";
import { NUM_COLUMNS, NUM_ROWS } from "../lib/chess-constants";
import { calcBoardDimensions } from "../lib/board-utils";
import useWindowDimensions from "../lib/window-dimensions";
import { ChessJSGameState, TileClickCallback } from "../lib/chess-types";
import RenderPieces from "../lib/piece-renderer";
import RenderGrid from "../lib/grid-renderer";

// STYLE ----------------------------------------------------------------------

const boardStyle = (
  boardSize: number,
  cellSize: number
): CSSProperties => ({
  width: boardSize,
  display: "grid",
  gridTemplateColumns: `repeat(${NUM_COLUMNS}, ${cellSize}px)`,
  gridTemplateRows: `repeat(${NUM_ROWS}, ${cellSize}px)`
})

// COMPONENT ------------------------------------------------------------------

export interface BoardProps {
  gamestate: ChessJSGameState
  selectedTile: Coordinate | undefined,
  displayedMoves: Coordinate[] | undefined,
  tileClickCallback: TileClickCallback
}

export default function Board(props: BoardProps): JSX.Element {

  const { viewportWidth, viewportHeight } = useWindowDimensions();
  const MARGIN = 100
  const { boardSize, cellSize } = calcBoardDimensions(viewportWidth, viewportHeight, MARGIN);

  return (
    <div style={{
      position: 'relative'
    }}>
      <div id="pieces-container">{
        RenderPieces
          .fromChessJS(props.gamestate)
          .toArray(cellSize, props.tileClickCallback)
      }
      </div>
      <div style={boardStyle(boardSize, cellSize)}>{
        RenderGrid
          .using(props.tileClickCallback)
          .withVisibleMoves(props.displayedMoves)
          .withSelectedTile(props.selectedTile)
          .toArray()
      }
      </div>
    </div>
  )  
}