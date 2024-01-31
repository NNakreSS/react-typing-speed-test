import { useSelector } from "react-redux";
import InputsRow from "./InputsRow";
import WordsArea from "./WordsArea";
import Conclusion from "./Conclusion";

const Main = () => {
  const status = useSelector((state) => state.typing.status);
  return (
    <>
      <header className="w-full bg-slate-900 text-white text-3xl font-bold p-5 text-center">
        Typing Speed Test
      </header>
      <main className="w-10/12 m-auto">
        {status === "end" ? <Conclusion /> : <WordsArea />}
        <InputsRow />
      </main>
      <footer className="w-full bg-gray-200 text-gray-400 text-2xl font-bold p-3 text-center absolute bottom-0">
        <a href="">NakreS Develeopment - Github</a>
      </footer>
    </>
  );
};

export default Main;
