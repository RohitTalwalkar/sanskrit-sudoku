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
  const [boardState, _setBoardState] = useState(INITIAL_BOARD);
  const [solution, setSolution] = useState(INITIAL_BOARD);
  const [cellsLeft, setCellsLeft] = useState(100);

  const setBoardState = (
    newBoard: Array<number[]>,
    newSolution?: Array<number[]>
  ) => {
    const checkSolution = newSolution || solution;
    let cellsLeft = 0;
    if (checkSolution) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (newBoard[i][j] !== checkSolution[i][j]) {
            cellsLeft++;
          }
        }
      }
    }
    _setBoardState(newBoard);
    setSolution(checkSolution);
    setCellsLeft(cellsLeft);
  };

  return (
    <div className="App">
      <Board {...{ boardState, setBoardState, solution }} />
      <PuzzleButton {...{ setBoardState }} />
      <SolvePuzzleButton {...{ boardState, setBoardState }} />
      <DisplayShlok cellsLeft={cellsLeft} />
    </div>
  );
}

export default App;
