import { useDispatch, useSelector } from "react-redux";
import {
  resetAll,
  setCurentWord,
  wordsAdded,
} from "../redux/slicers/typingSlice";
import { getWords } from "../utils/utils";
import InputTyping from "./InputTyping";
import Timer from "./Timer";

const InputsRow = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.typing.status);

  const resetHandle = () => {
    if (status !== "idle") {
      dispatch(resetAll());
      const words = getWords();
      dispatch(wordsAdded(words));
      dispatch(
        setCurentWord({ id: words[0].id, index: 0, word: words[0].word })
      );
    }
  };

  return (
    <div className="bg-gray-500/20 w-full p-2 mt-5 rounded-md h-16 flex justify-center items-center gap-3">
      <InputTyping />
      <Timer />
      <button
        onClick={resetHandle}
        id="reset"
        className="bg-sky-600 p-3 h-full rounded-sm text-2xl flex justify-center items-center text-white font-medium"
      >
        reset
      </button>
    </div>
  );
};

export default InputsRow;
