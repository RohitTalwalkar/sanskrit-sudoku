import "./App.css";
import { Board } from "./components/Board";

import { useState } from "react";
import { PuzzleButton } from "./components/PuzzleButton";
import { SolvePuzzleButton } from "./components/SolvePuzzleButton";
import { DisplayShlok } from "./components/DisplayShlok";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { INITIAL_BOARD } from "./data/sudokuBoard";

const Game = () => {
  const [boardState, _setBoardState] = useState(INITIAL_BOARD);
  const [solution, setSolution] = useState(INITIAL_BOARD);
  const [cellsLeft, setCellsLeft] = useState(100);
  const [cellsLeftPoint, setCellsLeftPoint] = useState<Array<number[]>>([]);

  const setBoardState = (
    newBoard: Array<number[]>,
    newSolution?: Array<number[]>
  ) => {
    const checkSolution = newSolution || solution;
    let cellsLeft = 0;
    let newCellsLeftPoint = [] as Array<number[]>;
    if (checkSolution) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (newBoard[i][j] !== checkSolution[i][j]) {
            cellsLeft++;
            newCellsLeftPoint.push([i, j]);
          }
        }
      }
    }
    _setBoardState(newBoard);
    setSolution(checkSolution);
    setCellsLeft(cellsLeft);
    setCellsLeftPoint(newCellsLeftPoint);
  };

  const solveOneLetter = () => {
    const randomlyPick = Math.ceil(Math.random() * cellsLeftPoint.length);
    const newBoard = JSON.parse(JSON.stringify(boardState));
    const i = cellsLeftPoint[randomlyPick][0];
    const j = cellsLeftPoint[randomlyPick][1];
    newBoard[i][j] = solution[i][j];
    _setBoardState(newBoard);
  };

  return (
    <>
      <Board {...{ boardState, setBoardState, solution }} />
      <PuzzleButton {...{ setBoardState }} />
      <SolvePuzzleButton {...{ boardState, setBoardState }} />
      <DisplayShlok cellsLeft={cellsLeft} solveOneLetter={solveOneLetter} />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Game />,
  },
  {
    path: "/title",
    element: <div>I am the title!!!!</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
