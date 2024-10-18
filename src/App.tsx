import "./App.css";
import { Board } from "./components/Board";

import { useState } from "react";
import { PuzzleButton } from "./components/PuzzleButton";
import { SolvePuzzleButton } from "./components/SolvePuzzleButton";

const INITIAL_BOARD = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function App() {
  const [boardState, setBoardState] = useState(INITIAL_BOARD);

  return (
    <div className="App">
      <Board {...{ boardState, setBoardState }} />
      <PuzzleButton {...{ setBoardState }} />
      <SolvePuzzleButton {...{ boardState, setBoardState }} />
    </div>
  );
}

export default App;
