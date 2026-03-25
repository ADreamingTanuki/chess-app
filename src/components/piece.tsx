// react
import { CSSProperties, JSX, ReactNode } from "react";

// svgr conversions
import * as SVG  from "../assets/svgr/index"

// custom
import { Team, TileClickCallback } from "../lib/chess-types";
import Coordinate from "../lib/coordinate";
import COLOUR from "../lib/colours";


// STYLES ---------------------------------------------------------------------

const ICON_SCALE = '65%';

const border = (colStr: string) => `solid 2px ${colStr}`;

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
  backgroundColor: COLOUR.BLACK_2,
  border: border(COLOUR.WHITE_2)
}

const STYLE_SHELL_WHITE: CSSProperties = {
  backgroundColor: COLOUR.WHITE_2,
  border: border(COLOUR.BLACK_2)
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

function fillColourByTeam(team: Team) {
  if (team === 'black') {
    return COLOUR.WHITE_1;
  }
  else {
    return COLOUR.BLACK_1;
  }
}


// GENERIC BUILDER ------------------------------------------------------------

export interface PieceProps {
  position: Coordinate,
  drawSize: number,
  team: Team,
  callback: TileClickCallback
}

function drawPiece(data: PieceProps, icon: ReactNode):  JSX.Element {
  return (
    <div 
      style={styleOfOuter(data.position, data.drawSize)}
      onClick={()=>data.callback(data.position)}
    >
      <div style={styleOfShell(data.team)}>
        {icon}
      </div>
    </div>
  )
}

// INDIVIDUAL PIECES ----------------------------------------------------------


export const Pawn = (props: PieceProps): JSX.Element =>
  drawPiece(
    props,    
    <SVG.Pawn
      width ={ICON_SCALE}
      height={ICON_SCALE}
      fill={fillColourByTeam(props.team)}
    />
  );
  
export const Knight = (props: PieceProps): JSX.Element =>
  drawPiece(
    props,    
    <SVG.Knight
      width ={ICON_SCALE}
      height={ICON_SCALE}
      fill={fillColourByTeam(props.team)}
    />
  );

export const Bishop = (props: PieceProps): JSX.Element =>
  drawPiece(
    props,    
    <SVG.Bishop
      width ={ICON_SCALE}
      height={ICON_SCALE}
      fill={fillColourByTeam(props.team)}
    />
  );

export const Rook = (props: PieceProps): JSX.Element =>
  drawPiece(
    props,    
    <SVG.Rook
      width ={ICON_SCALE}
      height={ICON_SCALE}
      fill={fillColourByTeam(props.team)}
    />
  );

export const Queen = (props: PieceProps): JSX.Element =>
  drawPiece(
    props,    
    <SVG.Queen
      width ={ICON_SCALE}
      height={ICON_SCALE}
      fill={fillColourByTeam(props.team)}
    />
  );

export const King = (props: PieceProps): JSX.Element =>
  drawPiece(
    props,    
    <SVG.King
      width ={ICON_SCALE}
      height={ICON_SCALE}
      fill={fillColourByTeam(props.team)}
    />
  );