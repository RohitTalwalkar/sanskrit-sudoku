import { ISudokuBoardData } from "@algorithm.ts/sudoku";

export const sudokuBoardDataToGrid = (data: ISudokuBoardData) => {
  const newBoard = [] as Array<number[]>;
  let boardRow = [];
  for (let item of data) {
    boardRow.push(item);
    if (boardRow.length === 9) {
      newBoard.push([...boardRow]);
      boardRow = [];
    }
  }
  return newBoard;
};

export const gridToISudokuBoardData = (grid: Array<number[]>) => {
  const boardData = [] as ISudokuBoardData;
  for (const boardRow of grid) {
    for (const boardCell of boardRow) {
      boardData.push(boardCell);
    }
  }
  return boardData;
};
