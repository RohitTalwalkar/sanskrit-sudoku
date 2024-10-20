import { SudokuCreator } from "@algorithm.ts/sudoku";

export const PuzzleButton = (props: any) => {
  const { setBoardState } = props;
  const generateNewPuzzle = () => {
    // 3 x 3 = 9
    const creator = new SudokuCreator({ childMatrixWidth: 3 });
    const puzzleBoard = creator.createSudoku();
    const newBoard = [] as Array<number[]>;
    let boardRow = [];
    for (let item of puzzleBoard.puzzle) {
      boardRow.push(item);
      if (boardRow.length === 9) {
        newBoard.push([...boardRow]);
        boardRow = [];
      }
    }
    let solvedBoard = [] as Array<number[]>;
    boardRow = [];
    for (let item of puzzleBoard.solution) {
      boardRow.push(item);
      if (boardRow.length === 9) {
        solvedBoard.push([...boardRow]);
        boardRow = [];
      }
    }
    setBoardState(newBoard, solvedBoard);
  };
  return (
    <input type="button" onClick={generateNewPuzzle} value={"New puzzle"} />
  );
};
