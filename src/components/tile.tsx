// react
import { JSX, MouseEventHandler } from "react";

// custom
import "../styles/tile.css"
import Coordinate from "../lib/coordinate";

export interface TileProps {
  coordinate: Coordinate
  // onClick: Function
}

export default function Tile(props: TileProps): JSX.Element {

  return (
    <div className={`tile ${props.coordinate.colour()}`}>
      <span>{props.coordinate.string}</span>
      <span>{props.coordinate.column}</span>
      <span>{props.coordinate.row}</span>
    </div>
  )
}