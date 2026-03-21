
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
        // todo
        //  - build coordinate type
        //  - use coord type to evaluate tile colour
        // build coord type with tests yay
        grid.push(<Tile key={i} coordinate={SQUARES[i]}/>);
      }
    }

    // for (let y = 0; y < BOARD_SIZE; y++) {
    //   for (let x = 0; x < BOARD_SIZE; x++) {
    //     grid.push(
    //       <Tile
    //         key={`${x}:${y}`}
    //         color={colorOfTile(x, y)} 
    //         coord={coordOfTile(x, y)}
    //         posX={x}
    //         posY={y}
    //         onClick={onTileClicked}
    //       >
    //         {}
    //       </Tile>
    //     )
    //   }    
    // }
    return grid;
  }

  
  // function colorOfTile(coord: string): TileProps["color"] {
  //   const s = coord.split('');
  //   const row = s[0];
  //   const col = s[1];

  //   if ()

  //   if (x % 2 === 0) {
  //     return y % 2 === 0 ? "white" : "black";
  //   } else {
  //     return y % 2 === 0 ? "black" : "white";
  //   } 
  // }

  // function coordOfTile(x: number, y: number): string {
  //   const columnLookup = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  //   const rowLookup = ['8','7','6','5','4','3','2','1'];
  //   return columnLookup[x] + rowLookup[y];
  // }

  // function onTileClicked(x: number, y: number) {
  //   console.log('clicked a tile')
  //   // todo: check necessary api for chess plugin
  //   console.log(`${x}:${y}`)
  // }

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