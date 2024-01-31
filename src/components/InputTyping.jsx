import { useDispatch, useSelector } from "react-redux";
import {
  incrementFailed,
  incrementPressedFailed,
  incrementPressedSuccessed,
  incrementSuccessed,
  setCurentWord,
  setStatus,
  typingSelector,
  wordUpdated,
} from "../redux/slicers/typingSlice";
import { useEffect, useRef } from "react";

const InputTyping = () => {
  const dispatch = useDispatch();
  const words = useSelector(typingSelector.selectAll);
  const { word, id, index } = useSelector((state) => state.typing.currentWord);
  const typingStatus = useSelector((state) => state.typing.status);
  const inputRef = useRef(null);

  useEffect(() => {
    if (typingStatus == "idle") {
      inputRef.current.value = "";
    }
  }, [typingStatus]);

  const changeInputHandle = (e) => {
    changeStatus();
    const input = e.target.value.toLowerCase();
    const isStartWithWord = word.toLowerCase().startsWith(input);
    const isStartWithSpace = input.startsWith(" ");
    const isEndWithSpace = input.endsWith(" ");

    // Boşlukla başlamayı kontrol eder
    if (isStartWithSpace) return (e.target.value = "");

    if (!isEndWithSpace) {
      // Yazılan kelime doğru mu kontrol eder
      dispatch(
        wordUpdated({
          id,
          changes: { status: isStartWithWord ? "idle" : "wrong" },
        })
      );
      dispatch(
        isStartWithWord ? incrementPressedSuccessed() : incrementPressedFailed()
      );
    } else {
      // boşluğa basıldığında Yazılan kelime eşleşirse veya eşleşmezse durumu günceller
      const lastInput = input.trim();
      const isInputMatchWord = lastInput.startsWith(word.toLowerCase());
      dispatch(
        wordUpdated({
          id,
          changes: { status: isInputMatchWord ? "success" : "fail" },
        })
      );
      dispatch(isInputMatchWord ? incrementSuccessed() : incrementFailed());
      nextWord(e);
    }
  };

  const nextWord = (e) => {
    // Sonraki kelimeye geçer
    const nextIndex = index + 1;
    const { id: nextId, word: nextWord } = words[nextIndex];
    dispatch(setCurentWord({ id: nextId, word: nextWord, index: nextIndex }));
    e.target.value = ""; // Input alanını temizler
  };

  const changeStatus = () => {
    if (typingStatus == "idle") {
      dispatch(setStatus("start"));
    }
  };

  return (
    <input
      ref={inputRef}
      disabled={typingStatus == "end" && true}
      onChange={changeInputHandle}
      className="h-full rounded-md w-6/12 p-5 text-2xl font-semibold outline-none shadow-inner shadow-black"
      type="text"
    />
  );
};

export default InputTyping;
