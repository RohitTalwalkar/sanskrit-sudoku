import { ISudokuBoardData, SudokuSolver } from "@algorithm.ts/sudoku";

type Props = {
  boardState: Array<number[]>;
  setBoardState: any;
};

export const SolvePuzzleButton = (props: any) => {
  const { boardState, setBoardState } = props;

  const solvePuzzle = () => {
    const solver = new SudokuSolver({ childMatrixWidth: 3 });
    const solverInput = [] as ISudokuBoardData;
    const solvedBoard = [] as ISudokuBoardData;
    for (const boardRow of boardState) {
      for (const boardCell of boardRow) {
        solverInput.push(boardCell);
      }
    }
    solver.solve(solverInput, solvedBoard);
    const newBoard = [] as Array<number[]>;
    let boardRow = [];
    for (let item of solvedBoard) {
      boardRow.push(item);
      if (boardRow.length === 9) {
        newBoard.push([...boardRow]);
        boardRow = [];
      }
    }
    setBoardState(newBoard);
  };
  return <input type="button" onClick={solvePuzzle} value={"Solve it!"} />;
};
