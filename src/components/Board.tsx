type Props = {
  boardState: Array<number[]>;
  setBoardState: any;
};

export const Board = (props: Props) => {
  const { boardState, setBoardState } = props;
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
                }}
                className={`noselect board-p p_${index_1}_${index_2} ${
                  index_2 === 0
                    ? "left_side"
                    : index_2 === 8
                    ? "right_side"
                    : "middle_side"
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
