
// react
import { ReactNode, useState } from "react";

// custom
import Board from "./components/board";
import TurnIndicator from "./components/turn-indicator";
import Flex from "./components/flex";
import StartResetButton from "./components/start-reset-button";
import { ChessJSGameState, Team } from "./lib/chess-types";
import ChessGame from "./lib/chess-game";
import Coordinate from "./lib/coordinate";

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

  // todo: highlight move tiles on click
  // todo: can move pieces and progress game turns
  async function onClickTile(pos: Coordinate) {
    ChessGame.getMovesAt(pos)
      .then(res => console.log(res));
  }
  
  return (    
    <main 
      className="container"
    >      
      <Flex direciton="column">
        <Board 
          gamestate={gameState} 
          tileClickCallback={onClickTile}
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