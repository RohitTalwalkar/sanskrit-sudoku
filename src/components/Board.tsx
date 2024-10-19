type Props = {
  boardState: Array<number[]>;
  solution: Array<number[]>;
  setBoardState: any;
  setCellsLeft: any;
};

export const Board = (props: Props) => {
  const { boardState, setBoardState, solution, setCellsLeft } = props;
  return (
    <>
      {boardState.map((row, index_1) => {
        return (
          <div key={index_1}>
            {row.map((num, index_2) => (
              <div
                onClick={() => {
                  const updatedBoard = JSON.parse(JSON.stringify(boardState));
                  updatedBoard[index_1][index_2] =
                    (updatedBoard[index_1][index_2] + 1) % 9;
                  setBoardState(updatedBoard);
                  let cellsLeft = 0;
                  for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 9; j++) {
                      if (updatedBoard[i][j] !== solution[i][j]) {
                        cellsLeft++;
                      }
                    }
                  }
                  setCellsLeft(cellsLeft);
                }}
                className={`noselect board-p p_${index_1}_${index_2} ${
                  index_2 === 0
                    ? "left_side"
                    : index_2 === 8
                    ? "right_side"
                    : "middle_side"
                } ${
                  solution[index_1][index_2] === boardState[index_1][index_2]
                    ? "correct"
                    : "wrong"
                }`}
                key={`p_${index_1}_${index_2}`}
              >
                {boardState[index_1][index_2] + 1}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};
