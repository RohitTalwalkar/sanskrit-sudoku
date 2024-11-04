import { ISudokuBoardData, SudokuSolver } from "@algorithm.ts/sudoku";
import {
  gridToISudokuBoardData,
  sudokuBoardDataToGrid,
} from "../util/BoardConversion";

type Props = {
  boardState: Array<number[]>;
  setBoardState: any;
};

export const SolvePuzzleButton = (props: any) => {
  const { boardState, setBoardState } = props;

  const solvePuzzle = () => {
    const solver = new SudokuSolver({ childMatrixWidth: 3 });
    const solverInput = gridToISudokuBoardData(boardState);
    const solvedBoard = [] as ISudokuBoardData;
    solver.solve(solverInput, solvedBoard);
    const newBoard = sudokuBoardDataToGrid(solvedBoard);
    setBoardState(newBoard);
  };
  return <input type="button" onClick={solvePuzzle} value={"Solve it!"} />;
};
