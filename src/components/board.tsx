
// react
import { CSSProperties, JSX } from "react";

// custom
import Tile, { TileProps } from "./tile";
import "../styles/board.css"
import { Piece } from "./piece";

export interface BoardProps {
  sizeX: number,
  sizeY: number
}

export default function Board(props: BoardProps): JSX.Element {

  function buildGrid(): JSX.Element[] {
    let grid: JSX.Element[] = []
    for (let y = 0; y < props.sizeY; y++) {
      for (let x = 0; x < props.sizeX; x++) {
        grid.push(<Tile
          key={`${x}:${y}`}
          color={colorOfTile(x, y)} 
          coord={coordOfTile(x, y)}
          posX={x}
          posY={y}
          onClick={onTileClicked}
        />)
      }    
    }
    return grid;
  }

  function colorOfTile(x: number, y: number): TileProps["color"] {
    if (x % 2 === 0) {
      return y % 2 === 0 ? "white" : "black";
    } else {
      return y % 2 === 0 ? "black" : "white";
    } 
  }

  function coordOfTile(x: number, y: number): string {
    const lookup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    return lookup[x] + y.toString();
  }

  function onTileClicked(x: number, y: number) {
    console.log('clicked a tile')
    // todo: check necessary api for chess plugin
    console.log(`${x}:${y}`)
  }

  return (
    <div className="gameplay">
      <div id="pieces-container">
        {/* <Piece posX={0} posY={0}/> */}
      </div>
      <div
        className="board"      
        style={{        
          "grid-template-columns": `repeat(${props.sizeY}, 1fr)`,
          "grid-template-rows": `repeat(${props.sizeX}, 1fr)`
        } as CSSProperties}  
      >
        {buildGrid()}
      </div>
    </div>
  )
}