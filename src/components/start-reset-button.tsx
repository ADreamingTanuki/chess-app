import { ReactNode } from "react";

export interface StartResetButtonProps {
  isGameInPlay: boolean,
  callback: () => void
}

export default function StartResetButton(props: StartResetButtonProps): ReactNode {

  function drawLabel() {
    return props.isGameInPlay ? "Reset Game"  : "Start Game";
  }

  return (
    <button 
      onClick={() => props.callback()}
    >
      { drawLabel() }
    </button>
  )
}