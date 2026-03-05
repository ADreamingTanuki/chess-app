
// react

// chess.js
import { Chess } from "chess.js";

// custom
import Board from "./components/board";
import { Piece } from "./components/piece";
import "./styles/main.css"

function App() {

  let game = new Chess();

  return (
    <main 
      className="container"
    >
      <Board 
        gamestate={game.board()} 
      />
    </main>
  );
}

export default App;
