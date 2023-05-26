import { useContext } from "react";
import { MainContext, MainContextProps } from "./Main";

function Result() {
  const { guessHint, previousGuesses } = useContext(
    MainContext
  ) as MainContextProps;

  return (
    <div>
      {guessHint && (
        <>
          <h2 className="font-bold text-logan-500 text-xl">Hints</h2>
          <p>{guessHint}</p>
          <h3 className="font-bold text-logan-500 text-lg">Previous Guesses</h3>
          <p>{previousGuesses.join(", ")}</p>
        </>
      )}
    </div>
  );
}

export default Result;
