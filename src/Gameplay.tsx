
// react
import { ReactNode, useState } from "react";

// custom
import Board from "./components/board";
import TurnIndicator from "./components/turn-indicator";
import Flex from "./components/flex";
import StartResetButton from "./components/start-reset-button";
import { ChessJSGameState, MoveList, Team } from "./lib/chess-types";
import ChessGame from "./lib/chess-game";
import Coordinate from "./lib/coordinate";
import { makeErrorSubtag } from "./lib/custom-errors";


const ERR_TAG = makeErrorSubtag('GAMEPLAY');

export default function Gameplay(): ReactNode {

  const [isInPlay, setIsInPlay] = useState(false);
  const [gameState, setGameState] = useState<ChessJSGameState>([]);
  const [teamToPlay, setTeamToPlay] = useState<Team>('white');

  const [selectedTile, setSelectedTile] = useState<Coordinate | undefined>();
  const [displayedMoves, setDisplayMoves] = useState<MoveList | undefined>();


  function isSelectedTile(pos: Coordinate): boolean {
    if (!selectedTile) return false;
    return pos.string === selectedTile.string;
  }

  function isADisplayedMove(pos: Coordinate): boolean {
    if (!displayedMoves) return false;
    for (let i = 0; i < displayedMoves.moves.length; i++) {
      if (displayedMoves.moves[i].to.string === pos.string) return true;
    }
    return false;
  }

  function tryCommitMove(from: Coordinate, to: Coordinate) {    
    ChessGame.tryMove(from, to)
    .then(() => {
      setTeamToPlay(teamToPlay === 'black' ? 'white' : 'black');
      clearSelection();
      setGameState(ChessGame.game.board());
    })
    .catch(error => console.error(error));
  }

  function clearSelection() {
    setSelectedTile(undefined);
    setDisplayMoves(undefined);
  }

  function onStartGame() {
    if (isInPlay) {
      ChessGame.clear();
      setIsInPlay(false);
      clearSelection();
      setGameState([[]]);
    }
    else {
      ChessGame.new();
      setIsInPlay(true);
      setTeamToPlay("white");
      setGameState(ChessGame.game.board());
    }
  }

  function onClickTile(pos: Coordinate) {
    console.log(`clicked on tile at: ${pos.string}`);

    if (selectedTile && isADisplayedMove(pos)) 
      tryCommitMove(selectedTile, pos);
    else 
      clearSelection();
  }

  function onClickPiece(pos: Coordinate) {
    console.log(`clicked on piece at: ${pos.string}`);

    if (selectedTile) {
      if (isADisplayedMove(pos)) tryCommitMove(selectedTile, pos);
      else clearSelection();
    }
    else {
      // todo: team check??
      setSelectedTile(pos);
      setDisplayMoves(ChessGame.getMovesAt(pos));
    }

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
          pieceClickCallback={onClickPiece}
          selectedTile={selectedTile}
          displayedMoves={displayedMoves?.toTargetCoordinates()}
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