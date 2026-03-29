
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
  const [selectedTile, setSelectedTile] = useState<Coordinate | undefined>();
  const [displayedMoves, setDisplayMoves] = useState<Coordinate[] | undefined>();
  const [gameState, setGameState] = useState<ChessJSGameState>([]);

  function onStartGame() {
    ChessGame.new();
    setIsInPlay(true);
    setTeamToPlay("white");
    setGameState(ChessGame.game.board());
  }

  async function onClickTile(pos: Coordinate) {
    console.log(`clicked on: ${pos.string}`);
    ChessGame.getMovesAt(pos)
      .then(res => {
        setSelectedTile(pos);
        setDisplayMoves(res);
      });
  }
  
  return (    
    <main 
      className="container"
    >      
      <Flex direciton="column">
        {/* 
        Need to re-check how pieces and tiles are being made... something is wrong 
        with mapping between pieces and tiles, causing the selection system to fail            
        */}
        <Board 
          gamestate={gameState} 
          tileClickCallback={onClickTile}
          selectedTile={selectedTile}
          displayedMoves={displayedMoves}
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