// react
import { JSX, MouseEventHandler } from "react";

// custom
import "../styles/tile.css"
import Coordinate from "../lib/coordinate";

export interface TileProps {
  coordinate: Coordinate
  onClick: Function
}

export default function Tile(props: TileProps): JSX.Element {


  // todo: tile resolves own colour
  // REMEMBER THAT EVERYTHING SHOULD BE ENGINEERED AROUND CLASSIC 8x8 CHESS
  // DON'T GO GOOGLY EYED THINKING YOU CAN MAKE IT GENERIC FOR A FUTURE THAT WON'T BE IMPLEMENTED

  // todo: tile instantiates own piece icon if data is present
  // data should be passed thrugh props, or the piece itself as a child object?
  // choose one
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