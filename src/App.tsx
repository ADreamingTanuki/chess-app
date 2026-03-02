
// react

// custom
import Board from "./components/board";
import { Piece } from "./components/piece";
import "./styles/main.css"

function App() {

  const board_size = 8;

  return (
    <main 
      className="container"
    >
      <Board sizeX={board_size} sizeY={board_size}/>
    </main>
  );
}

export default App;
