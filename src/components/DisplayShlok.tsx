import { useState } from "react";
import { DATA } from "../data/shlok";

type ShlokCharacterProps = {
  character: string;
};

const ShlokCharacter = (props: ShlokCharacterProps) => {
  const { character } = props;
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
  percentComplete: number;
};

export const DisplayShlok = (props: DisplayShlokProps) => {
  const { percentComplete } = props;
  const displayNumberOfChars = () => {
    return (
      Math.min(DATA[0][0].length + DATA[0][1].length) * (percentComplete / 100)
    );
  };
  return (
    <>
      {DATA[0].map((lineOfText, index) => (
        <div
          style={{ width: "100vh", display: "flex", justifyContent: "center" }}
        >
          {lineOfText.map((char, index2) => (
            <ShlokCharacter key={`${index}-${index2}`} character={char} />
          ))}
        </div>
      ))}
    </>
  );
};
