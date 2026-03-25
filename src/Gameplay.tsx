
// react
import { ReactNode, useState } from "react";

// chess.js
import { Chess } from "chess.js";

// custom
import Board from "./components/board";
import TurnIndicator from "./components/turn-indicator";
import Flex from "./components/flex";
import StartResetButton from "./components/start-reset-button";
import { ChessJSGameState, Team } from "./lib/chess-types";
import ChessGame from "./lib/chess-game";

export default function Gameplay(): ReactNode {

  const [isInPlay, setIsInPlay] = useState(false);
  const [teamToPlay, setTeamToPlay] = useState<Team>('white');
  const [gameState, setGameState] = useState<ChessJSGameState>([]);

  function onStartGame() {
    ChessGame.new();
    setIsInPlay(true);
    setTeamToPlay("white");
    setGameState(ChessGame.game.board());
  }
  
  return (    
    <main 
      className="container"
    >      
      <Flex direciton="column">
        <Board 
          gamestate={gameState} 
        />
        <Flex direciton="column">
          <TurnIndicator
            isActive={isInPlay}
            teamToPlay={teamToPlay}
          />
          <StartResetButton
            isGameInPlay={isInPlay} 
            callback={onStartGame}
          />
        </Flex>
      </Flex>
    </main>
  )
}