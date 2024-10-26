import "./App.css";
import { Board } from "./components/Board";

import { useState } from "react";
import { PuzzleButton } from "./components/PuzzleButton";
import { SolvePuzzleButton } from "./components/SolvePuzzleButton";
import { DisplayShlok } from "./components/DisplayShlok";

import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import { INITIAL_BOARD } from "./data/sudokuBoard";

const Game = () => {
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
    <>
      <Board {...{ boardState, setBoardState, solution }} />
      <PuzzleButton {...{ setBoardState }} />
      <SolvePuzzleButton {...{ boardState, setBoardState }} />
      <DisplayShlok cellsLeft={cellsLeft} />
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
