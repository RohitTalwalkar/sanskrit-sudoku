import { useState } from "react";

type Props = {
  boardState: Array<number[]>;
  solution: Array<number[]>;
  setBoardState: any;
};

export const Board = (props: Props) => {
  const { boardState, setBoardState, solution } = props;
  const [showGuide, setShowGuide] = useState("unchecked");
  const toggleGuide = (checkValue: string) => {
    if (checkValue === "checked") {
      setShowGuide("unchecked");
      return;
    }
    setShowGuide("checked");
  };
  return (
    <div className="board-container">
      <label htmlFor="show-guide">Show Guide: </label>
      <input
        name="show-guide"
        type="checkbox"
        value={showGuide}
        onClick={(e) => {
          toggleGuide((e.target as any).value);
        }}
      />
      {boardState.map((row, index_1) => {
        return (
          <div key={index_1}>
            {row.map((num, index_2) => (
              <div
                onClick={(e) => {
                  console.log(
                    (e as any).nativeEvent.offsetX,
                    (e as any).nativeEvent.offsetY,
                    e
                  );
                  const updatedBoard = JSON.parse(JSON.stringify(boardState));
                  if ((e as any).nativeEvent.offsetY <= 50) {
                    updatedBoard[index_1][index_2] =
                      (updatedBoard[index_1][index_2] + 1) % 9;
                  } else {
                    updatedBoard[index_1][index_2] =
                      (((updatedBoard[index_1][index_2] - 1) % 9) + 9) % 9;
                  }

                  setBoardState(updatedBoard);
                }}
                className={`noselect board-p p_${index_1}_${index_2} ${
                  index_2 === 0
                    ? "left_side"
                    : index_2 === 8
                    ? "right_side"
                    : "middle_side"
                } ${
                  showGuide === "unchecked"
                    ? ""
                    : solution[index_1][index_2] ===
                      boardState[index_1][index_2]
                    ? "correct"
                    : "wrong"
                }`}
                key={`p_${index_1}_${index_2}`}
              >
                {num + 1}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
