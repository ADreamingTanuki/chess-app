
// react
import { CSSProperties, JSX } from "react";

// chess.js
import { SQUARES } from "chess.js";

// custom
import Tile, { TileProps } from "./tile";
import Coordinate from "../lib/coordinate";
import "../styles/board.css"
import { NUM_COLUMNS, NUM_ROWS } from "../lib/chess-constants";

const BOARD_SIZE = 8;

type ChessTileState = {
  square: string; 
  type: string; 
  color: string;
} | null;

export interface BoardProps {
  gamestate: ChessTileState[][]
}


export default function Board(props: BoardProps): JSX.Element {

  function buildGrid(): JSX.Element[] {
    console.log(props.gamestate);
    let grid: JSX.Element[] = []

    for (let col = 0; col < NUM_COLUMNS; col++) {
      for (let row = 0; row < NUM_ROWS; row++) {
        const i = col * NUM_ROWS + row;
        grid.push(<Tile key={i} coordinate={new Coordinate(SQUARES[i])}/>);
      }
    }
    return grid;
  }

  let coord = new Coordinate("A8");

  return (
    <div className="gameplay">
      <div id="pieces-container">
        {/* <Piece posX={0} posY={0}/> */}
      </div>
      <div
        className="board"      
        style={{        
          "grid-template-columns": `repeat(${BOARD_SIZE}, 1fr)`,
          "grid-template-rows": `repeat(${BOARD_SIZE}, 1fr)`
        } as CSSProperties}  
      >
        {buildGrid()}
      </div>
    </div>
  )
}