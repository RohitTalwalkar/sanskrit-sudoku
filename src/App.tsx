import "./App.css";
import { Board } from "./components/Board";

import { useState } from "react";
import { PuzzleButton } from "./components/PuzzleButton";
import { SolvePuzzleButton } from "./components/SolvePuzzleButton";
import { DisplayShlok } from "./components/DisplayShlok";

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
  const [solution, setSolution] = useState(INITIAL_BOARD);

  return (
    <div className="App">
      <Board {...{ boardState, setBoardState }} />
      <PuzzleButton {...{ setBoardState, setSolution }} />
      <SolvePuzzleButton {...{ boardState, setBoardState }} />
      <DisplayShlok />
    </div>
  );
}

export default App;
