// react
import { JSX, MouseEventHandler } from "react";

// custom
import "../styles/tile.css"

export interface TileProps {
  color: 'black' | 'white',
  coord: string,
  posX: number,
  posY: number,
  onClick: Function
}

export default function Tile(props: TileProps): JSX.Element {

  return (
    <div 
      className="tile"
      style= {{
        backgroundColor: props.color === 'black' ? "#111" : "#EEE"
      }}
      onClick={() => props.onClick(props.posX, props.posY)}
    >
      <span>{props.coord}</span>
    </div>
  )
}