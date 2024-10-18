import { DATA } from "../data/shlok";

export const DisplayShlok = () => {
  const displayNumberOfChars = (index: number) => {
    return 14;
  };
  return (
    <>
      {DATA[0].map((lineOfText, index) => (
        <div
          style={{ width: "100vh", display: "flex", justifyContent: "center" }}
        >
          <p
            key={index}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "inline-block",
              maxWidth: `${displayNumberOfChars(index)}ch`,
            }}
          >
            {lineOfText}
          </p>
        </div>
      ))}
    </>
  );
};
