
// react
import { ReactNode } from "react";

// chess.js
import { Chess } from "chess.js";

// custom
import Board from "./components/board";
import TurnIndicator from "./components/turn-indicator";
import Flex from "./components/flex";
import StartResetButton from "./components/start-reset-button";

export default function Gameplay(): ReactNode {

  let game = new Chess();
  
  return (    
    <main 
      className="container"
    >      
      <Flex direciton="column">
        <Board 
          gamestate={game.board()} 
        />
        <Flex direciton="column">
          <TurnIndicator/>
          <StartResetButton/>
        </Flex>
      </Flex>
    </main>
  )
}