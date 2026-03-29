// react
import { CSSProperties, JSX } from "react";

// custom
import Coordinate from "../lib/coordinate";
import COLOUR from "../lib/colours";
import { SquareColour, TileClickCallback } from "../lib/chess-types";

// DEBUG ----------------------------------------------------------------------

const RENDER_COORD_STRING = true;
const RENDER_COORD_ROWCOL = true;

// STYLES ---------------------------------------------------------------------

const STYLE = {
  TILE: {    
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '10px'
  } as CSSProperties,
  BLACK: {
    backgroundColor: COLOUR.BLACK_1,
    color: COLOUR.WHITE_1
  } as CSSProperties,
  WHITE: {
    backgroundColor: COLOUR.WHITE_1,
    color: COLOUR.BLACK_1
  } as CSSProperties,
  SELECTION: {    
    backgroundColor: COLOUR.SELECTION,
    color: COLOUR.BLACK_1
  } as CSSProperties,
  MOVE: {    
    backgroundColor: COLOUR.MOVE,
    color: COLOUR.BLACK_1
  } as CSSProperties
}

function buildStyle(
  colour: SquareColour,
  isMove?: boolean,
  isSelected?: boolean
): CSSProperties {

  if (isSelected) return {
    ...STYLE.TILE,
    ...STYLE.SELECTION
  } as CSSProperties

  if (isMove) return {
    ...STYLE.TILE,
    ...STYLE.MOVE
  } as CSSProperties

  const selected = colour === 'black' ? STYLE.BLACK : STYLE.WHITE;
  return {
    ...STYLE.TILE,
    ...selected
  } as CSSProperties
}


// COMPONENT ------------------------------------------------------------------


export interface TileProps {
  coordinate: Coordinate,
  callback: TileClickCallback,
  drawAsMove?: boolean,
  drawAsSelected?: boolean
}

export default function Tile(props: TileProps): JSX.Element {
  return (
    <div 
      style={buildStyle(
        props.coordinate.colour(),
        props.drawAsMove,
        props.drawAsSelected
      )}
      onClick={() => props.callback(props.coordinate)}
    >
      {RENDER_COORD_STRING && <span>{props.coordinate.string}</span>}
      {RENDER_COORD_ROWCOL && <span>{`r: ${props.coordinate.row}`}</span>}
      {RENDER_COORD_ROWCOL && <span>{`c: ${props.coordinate.column}`}</span>}
    </div>
  )
}