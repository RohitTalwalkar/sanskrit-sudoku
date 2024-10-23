import { SudokuCreator } from "@algorithm.ts/sudoku";
import { sudokuBoardDataToGrid } from "../util/BoardConversion";

export const PuzzleButton = (props: any) => {
  const { setBoardState } = props;
  const generateNewPuzzle = () => {
    // 3 x 3 = 9
    const creator = new SudokuCreator({ childMatrixWidth: 3 });
    const puzzleBoard = creator.createSudoku();
    const newBoard = sudokuBoardDataToGrid(puzzleBoard.puzzle);
    const solvedBoard = sudokuBoardDataToGrid(puzzleBoard.solution);

    setBoardState(newBoard, solvedBoard);
  };
  return (
    <input type="button" onClick={generateNewPuzzle} value={"New puzzle"} />
  );
};
