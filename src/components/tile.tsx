// react
import { CSSProperties, JSX } from "react";

// custom
import Coordinate from "../lib/coordinate";
import COLOUR from "../lib/colours";
import { SquareColour } from "../lib/chess-types";


// STYLES ---------------------------------------------------------------------

const STYLE = {
  TILE: {    
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '10px'
  },
  BLACK: {
    backgroundColor: COLOUR.BLACK_1,
    color: COLOUR.WHITE_1
  },
  WHITE: {
    backgroundColor: COLOUR.WHITE_1,
    color: COLOUR.BLACK_1
  }
}

function buildStyle(colour: SquareColour): CSSProperties {
  const selected = colour === 'black' ? STYLE.BLACK : STYLE.WHITE;
  return {
    ...STYLE.TILE,
    ...selected
  } as CSSProperties
}


// COMPONENT ------------------------------------------------------------------

export interface TileProps {
  coordinate: Coordinate
}

export default function Tile(props: TileProps): JSX.Element {
  return (
    <div style={buildStyle(props.coordinate.colour())}>
      <span>{props.coordinate.string}</span>
      {/* <span>{props.coordinate.column}</span>
      <span>{props.coordinate.row}</span> */}
    </div>
  )
}