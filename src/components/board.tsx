
// react
import { CSSProperties, JSX } from "react";

// chess.js
import { SQUARES } from "chess.js";

// custom
import Tile from "./tile";
import Coordinate from "../lib/coordinate";
import "../styles/board.css"
import { NUM_COLUMNS, NUM_ROWS } from "../lib/chess-constants";
import { calcBoardDimensions } from "../lib/board-utils";
import useWindowDimensions from "../lib/window-dimensions";

import { ChessJSTileState } from "../lib/chess-types";
import RenderPieces from "../lib/piece-renderer";

export interface BoardProps {
  gamestate: ChessJSTileState[][]
}

export default function Board(props: BoardProps): JSX.Element {

  const { viewportWidth, viewportHeight } = useWindowDimensions();
  const MARGIN = 100
  const { boardSize, cellSize } = calcBoardDimensions(viewportWidth, viewportHeight, MARGIN)

  const boardStyle = {
    width: boardSize,
    display: "grid",
    gridTemplateColumns: `repeat(${NUM_COLUMNS}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${NUM_ROWS}, ${cellSize}px)`
  } as CSSProperties;

  return (
    <div className="gameplay">
      {/* todo: the pieces need to be moved via library + game commands?? - or just position them correctly via chess.js board state */}
      <div id="pieces-container">
        {
          RenderPieces
            .fromChessJS(props.gamestate)
            .toArray(cellSize)
        }
      </div>
      <div  
        style={boardStyle} 
      >
        {buildGrid()}
      </div>
    </div>
  )  
  
  function buildGrid(): JSX.Element[] {
    let grid: JSX.Element[] = []

    for (let col = 0; col < NUM_COLUMNS; col++) {
      for (let row = 0; row < NUM_ROWS; row++) {
        const i = col * NUM_ROWS + row;
        grid.push(<Tile key={i} coordinate={new Coordinate(SQUARES[i])}/>);
      }
    }
    return grid;
  }
}