// src/context/BoardProvider.tsx
import React, { createContext, useContext, useState } from "react";
import { INITIAL_BOARD } from "../data/sudokuBoard";

type BoardContextType = {
  boardState: Array<number[]>;
  solution: Array<number[]>;
  cellsLeft: number;
  cellsLeftPoint: Array<number[]>;
  setBoardState: (
    newBoard: Array<number[]>,
    newSolution?: Array<number[]>
  ) => void;
};

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const BoardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

  return (
    <BoardContext.Provider
      value={{ boardState, solution, cellsLeft, cellsLeftPoint, setBoardState }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useBoardContext must be used within a BoardProvider");
  }
  return context;
};
