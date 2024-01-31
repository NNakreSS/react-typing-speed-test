import { useEffect, useRef } from "react";
// components
import { useSelector } from "react-redux";
// redux
import { typingSelector } from "../redux/slicers/typingSlice";
//
import classNames from "classnames";

const WordsArea = () => {
  const words = useSelector(typingSelector.selectAll);
  const {
    currentWord: { index: currentWordIndex },
    status: typingStatus,
  } = useSelector((state) => state.typing);

  const nextWordRef = useRef(null);
  useEffect(() => {
    if (nextWordRef.current && currentWordIndex) {
      nextWordRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentWordIndex]);

  return (
    <div className="mt-20 p-5 rounded-md border-2 border-black/50 grid grid-rows-1 h-32">
      <div className="w-full overflow-hidden select-none   leading-loose">
        {words.map(({ word, status }, index) => (
          <span
            ref={index === currentWordIndex ? nextWordRef : null}
            className={classNames(
              "font-medium text-2xl tracking-wide inline-block px-1 mx-1 py-1 text-center rounded-lg",
              {
                "bg-slate-300/50":
                  index == currentWordIndex &&
                  typingStatus === "start" &&
                  status !== "wrong",
              },
              { "bg-red-400": status == "wrong" },
              { "text-red-400": status == "fail" },
              { "text-green-400": status == "success" }
            )}
            key={index}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordsArea;
