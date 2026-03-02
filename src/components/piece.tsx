// react
import { Color } from "@tauri-apps/api/webview";
import { JSX } from "react";

// custom
import "../styles/piece.css";
import svg from "../assets/pieces/pawn.svg"

export interface PieceProps {
  // @TODO: consolodate possible piece types / teams under one type for consistencey, or consider using flexible strings
  // Team could also be a separate prop used for move-logic while 
  // color: Color, 
  // icon: SVGElement,
  // team: number
  posX: number,
  posY: number
}

export function Piece(props: PieceProps): JSX.Element {
  console.log(`Askye debug: ${svg}`)
  return (
    <div 
      className="outer"
      style={{
        left: props.posX,
        top: props.posY
      }}  
    >
      <div className="shell">
        <img src={svg}></img>
      </div>
    </div>
  )
}