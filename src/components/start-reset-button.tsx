import { JSX, useState } from "react";

import ChessGame from "../lib/chess-game";

export default function StartResetButton(): JSX.Element {

  const [isActive, setIsActive] = useState(ChessGame.isActive);

  function onClick(e: any) {
    console.log("squaming");
  }

  function drawLabel() {
    return isActive ? "Reset Game"  : "Start Game";
  }

  return (
    <button 
      onClick={onClick}
    >
      { drawLabel() }
    </button>
  )
}