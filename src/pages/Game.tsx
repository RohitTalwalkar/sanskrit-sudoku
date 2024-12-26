import { Board } from "../components/Board";
import { DisplayShlok } from "../components/DisplayShlok";
import { SolvePuzzleButton } from "../components/SolvePuzzleButton";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useBoardContext } from "../context/BoardProvider";

export const Game = () => {
  const { boardState, solution, cellsLeft, cellsLeftPoint, setBoardState } =
    useBoardContext();

  const solveOneLetter = () => {
    const randomlyPick = Math.ceil(Math.random() * cellsLeftPoint.length);
    const newBoard = JSON.parse(JSON.stringify(boardState));
    const i = cellsLeftPoint[randomlyPick][0];
    const j = cellsLeftPoint[randomlyPick][1];
    newBoard[i][j] = solution[i][j];
    setBoardState(newBoard);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <Board {...{ boardState, setBoardState, solution }} />
      <SolvePuzzleButton {...{ boardState, setBoardState }} />
      <DisplayShlok cellsLeft={cellsLeft} solveOneLetter={solveOneLetter} />
      <BackButton onBack={goBack} />
    </>
  );
};
