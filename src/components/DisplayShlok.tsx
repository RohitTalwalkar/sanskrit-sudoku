import { useState } from "react";
import { DATA } from "../data/shlok";

type ShlokCharacterProps = {
  character: string;
  showSolution: boolean;
  solveOneLetter: () => void;
};

const getData = () => {
  return DATA[1];
};

const ShlokCharacter = (props: ShlokCharacterProps) => {
  const { character, showSolution, solveOneLetter } = props;
  const [guessedCharacter, setGuessedCharacter] = useState("");

  // need to compare the character codes since some letters display different if they are alone vs in a word
  const borderStyle =
    guessedCharacter.charAt(0) !== character.charAt(0) ? "3px solid black" : "";
  const handleInput = (e: any) => {
    e.target.innerText = e.target.innerText.replace("_", "");
    if (e.target.innerText.length > 1) {
      e.target.innerText = e.target.innerText[0];
    }
    setGuessedCharacter(e.target.innerText);
    // got it right!
    if (e.target.innerText.charAt(0) === character.charAt(0)) {
      solveOneLetter();
    }
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
  solveOneLetter: () => void;
};

export const DisplayShlok = (props: DisplayShlokProps) => {
  const { cellsLeft, solveOneLetter } = props;
  const totalLetters = getData()[0].length + getData()[1].length;
  const showSolution = {} as any;
  let counter = 0;
  for (let i = 0; i < getData().length; i++) {
    for (let j = 0; j < getData()[i].length; j++) {
      counter++;
      showSolution[`${i}-${j}`] = counter <= totalLetters - cellsLeft;
    }
  }
  return (
    <>
      {getData().map((lineOfText, index) => (
        <div>
          {lineOfText.length}
          {lineOfText.map((char, index2) => (
            <ShlokCharacter
              key={`${index}-${index2}`}
              character={char}
              showSolution={showSolution[`${index}-${index2}`]}
              solveOneLetter={solveOneLetter}
            />
          ))}
        </div>
      ))}
    </>
  );
};
