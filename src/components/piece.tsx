// react
import { CSSProperties, JSX } from "react";

// svgr conversions
import * as SVG  from "../assets/svgr/index"

// custom
import { Team } from "../lib/chess-types";
import Coordinate from "../lib/coordinate";

export interface PieceProps {
  position: Coordinate,
  drawSize: number,
  team: Team,
  // iconSrc: string
}

// todo: 
// - colour / team
// - icon

export function Piece(props: PieceProps): JSX.Element {

  return (
    <div style={styleOfOuter(props.position, props.drawSize)}>
      <div style={styleOfShell(props.team)}>
        <SVG.Pawn width="y0%" height="70%" fill="#FFF" stroke="#FFF"/>
      </div>
    </div>
  )
}

const COLOUR_BLACK_1 = '#111'
const COLOUR_BLACK_2 = '#222'
const COLOUR_WHITE_1 = '#eee'
const COLOUR_WHITE_2 = '#ccc'

const border = (colStr: string) => `solid 1px ${colStr}`;

const STYLE_OUTER: CSSProperties = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const STYLE_SHELL: CSSProperties = {
  height: '80%',
  width: '80%',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const STYLE_SHELL_BLACK: CSSProperties = {
  backgroundColor: COLOUR_BLACK_2,
  border: border(COLOUR_WHITE_2)
}

const STYLE_SHELL_WHITE: CSSProperties = {
  backgroundColor: COLOUR_WHITE_2,
  border: border(COLOUR_BLACK_2)
}

const STYLE_ICON: CSSProperties = {  
  height: '70%',
  width:  '70%'
}

function styleOfOuter(coordinate: Coordinate, drawSize: number) {
  return {
    ...STYLE_OUTER,
    left: drawSize * coordinate.column,
    top: drawSize * coordinate.row,
    width: drawSize,
    height: drawSize,
  }
}

function styleOfShell(team: Team) {
  if (team === 'black') {
    return {
      ...STYLE_SHELL,
      ...STYLE_SHELL_BLACK
    }
  } else {    
    return {
      ...STYLE_SHELL,
      ...STYLE_SHELL_WHITE
    }
  }
}