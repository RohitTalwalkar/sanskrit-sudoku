import { useState } from "react";

const INITIAL_BOARD = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const Board = () => {
  const [boardState, setBoardState] = useState(INITIAL_BOARD);
  return (
    <>
      {boardState.map((row, index_1) => {
        return (
          <div key={index_1}>
            {row.map((num, index_2) => (
              <div
                className={`board-p p_${index_1}_${index_2} ${
                  index_2 === 0
                    ? "left_side"
                    : index_2 === 8
                    ? "right_side"
                    : "middle_side"
                }`}
                key={`p_${index_1}_${index_2}`}
              >
                {`p_${index_1}_${index_2}`}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};
