import { SetStateAction, createContext, useState } from "react";
import Form from "./Form";
import Result from "./Result";
export const MainContext = createContext<MainContextProps | null>(null);

function Main() {
  const [guessHint, setGuessHint] = useState("");
  const [input, setInput] = useState<number | string>("");
  const [previousGuesses, setPreviousGuesses] = useState<number[]>([]);

  return (
    <main className="bg-wild-sand-500 font-kanit min-h-screen p-4">
      <div className="lg:w-2/4 md:w-3/4 mx-auto xl:w-2/5">
        <h1 className="font-bold text-2xl text-logan-500">Guess The Number</h1>
        <p className="text-gun-powder-500">
          I am thinking of a number between 1 to 100. Can you guess the number ?
        </p>
        <MainContext.Provider
          value={{
            guessHint,
            input,
            previousGuesses,
            setGuessHint,
            setInput,
            setPreviousGuesses,
          }}
        >
          <Form />
          <Result />
        </MainContext.Provider>
      </div>
    </main>
  );
}
export interface MainContextProps {
  guessHint: string;
  input: number | string;
  previousGuesses: number[];
  setGuessHint: React.Dispatch<SetStateAction<string>>;
  setInput: React.Dispatch<SetStateAction<number | string>>;
  setPreviousGuesses: React.Dispatch<SetStateAction<number[]>>;
}
export default Main;
