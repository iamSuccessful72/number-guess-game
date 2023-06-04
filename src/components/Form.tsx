import { useContext, useState } from "react";
import { MainContext, MainContextProps } from "./Main";

function Form() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const { input, previousGuesses, setGuessHint, setInput, setPreviousGuesses } = useContext(
    MainContext
  ) as MainContextProps;
  const [numberOfGuess, setNumberOfGuess] = useState<number>(1);
  const [randomNumber, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * 100 + 1)
  );

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <label className="text-gun-powder-500 w-2/12" htmlFor="guess">
        Guess
        <span aria-label="required" className="text-red-500">
          *
        </span>
      </label>
      <input
        autoComplete="off"
        className="bg-transparent block border border-gun-powder-500 p-2 rounded w-full"
        disabled={disabled}
        id="guess"
        max={100}
        min={1}
        name="guess"
        onChange={(event) => setInput(event.target.value)}
        required
        type="number"
        value={input}
      />
      <div className="flex justify-end py-2">
        {previousGuesses.length && <button
          className="border border-gun-powder-500 mr-2 px-6 py-1 rounded text-gun-powder-500"
          onClick={handleRestart}
          type="button"
        >
          Restart
        </button>}
        <button
          className="bg-logan-500 ml-2 px-6 py-1 rounded text-gun-powder-500"
          disabled={disabled}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );

  function handleRestart(event: React.MouseEvent<HTMLButtonElement>): void {
    event;
    setDisabled(false);
    setGuessHint("");
    setNumberOfGuess(1);
    setPreviousGuesses([]);
    setRandomNumber(Math.floor(Math.random() * 100 + 1));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (numberOfGuess < 10 && +input > randomNumber) {
      setGuessHint(
        `Number of guess: ${numberOfGuess} / 10, Your Guess was too high!!`
      );
    } else if (numberOfGuess < 10 && +input < randomNumber) {
      setGuessHint(
        `Number of guess: ${numberOfGuess} / 10, Your guess was too low!!`
      );
    } else if (numberOfGuess <= 10 && +input === randomNumber) {
      setDisabled(true);
      setGuessHint(
        `Yay you won!! The number was ${randomNumber} You guessed it in ${numberOfGuess} guesses.`
      );
    } else {
      setDisabled(true);
      setGuessHint(
        `Number of guess: ${numberOfGuess} / 10, The number is ${randomNumber}.`
      );
    }
    setInput("");
    setNumberOfGuess((prevState) => prevState + 1);
    setPreviousGuesses((prevState) => [...prevState, +input]);
  }
}

export default Form;
