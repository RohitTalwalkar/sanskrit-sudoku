import { useState } from "react";
import { DATA } from "../data/shlok";

type ShlokCharacterProps = {
  character: string;
  showSolution: boolean;
};

const ShlokCharacter = (props: ShlokCharacterProps) => {
  const { character, showSolution } = props;
  const [guessedCharacter, setSuessedCharacter] = useState("");

  // need to compare the character codes since some letters display different if they are alone vs in a word
  const borderStyle =
    guessedCharacter.charAt(0) !== character.charAt(0) ? "3px solid black" : "";
  const handleInput = (e: any) => {
    e.target.innerText = e.target.innerText.replace("_", "");
    if (e.target.innerText.length > 1) {
      e.target.innerText = e.target.innerText[0];
    }
    setSuessedCharacter(e.target.innerText);
  };
  if (showSolution) {
    return (
      <div
        style={{
          display: "inline-block",
          marginRight: "10px",
          fontSize: "36px",
          minWidth: "26px",
        }}
      >
        {character}
      </div>
    );
  }
  return (
    <div
      style={{
        display: "inline-block",
        borderBottom: borderStyle,
        marginRight: "10px",
        fontSize: "36px",
        minWidth: "26px",
      }}
      contentEditable
      onInput={handleInput}
    />
  );
};

type DisplayShlokProps = {
  cellsLeft: number;
};

export const DisplayShlok = (props: DisplayShlokProps) => {
  const { cellsLeft } = props;
  const totalLetters = DATA[0][0].length + DATA[0][1].length;
  const showSolution = {} as any;
  let counter = 0;
  for (let i = 0; i < DATA[0].length; i++) {
    for (let j = 0; j < DATA[0][i].length; j++) {
      counter++;
      showSolution[`${i}-${j}`] = counter < totalLetters - cellsLeft;
    }
  }
  return (
    <>
      {DATA[0].map((lineOfText, index) => (
        <div
          style={{ width: "100vh", display: "flex", justifyContent: "center" }}
        >
          {lineOfText.map((char, index2) => (
            <ShlokCharacter
              key={`${index}-${index2}`}
              character={char}
              showSolution={showSolution[`${index}-${index2}`]}
            />
          ))}
        </div>
      ))}
    </>
  );
};
