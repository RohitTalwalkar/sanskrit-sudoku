import "./TitlePage.css";
import logo from "../sanskrit_logo.png";

import { useNavigate } from "react-router-dom";
import { SudokuCreator } from "@algorithm.ts/sudoku";
import { useBoardContext } from "../context/BoardProvider";
import { sudokuBoardDataToGrid } from "../util/BoardConversion";

export const Title = () => {
  const { setBoardState } = useBoardContext();

  const navigate = useNavigate();

  const generateNewPuzzle = () => {
    const creator = new SudokuCreator({ childMatrixWidth: 3 });
    const puzzleBoard = creator.createSudoku();
    const newBoard = sudokuBoardDataToGrid(puzzleBoard.puzzle);
    const solvedBoard = sudokuBoardDataToGrid(puzzleBoard.solution);

    setBoardState(newBoard, solvedBoard);
  };

  const onNewGameClick = () => {
    generateNewPuzzle();
    navigate("/game");
  };

  return (
    <div className="container">
      <h1 className="title">Sanskrit Sudoku</h1>
      <img src={logo} alt="Game Logo" className="centered-image" />
      <button onClick={onNewGameClick} className="button">
        New Game
      </button>
    </div>
  );
};
