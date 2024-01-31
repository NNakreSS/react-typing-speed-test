import "./App.css";
import { useEffect } from "react";
// redux
import { useDispatch } from "react-redux";
import { setCurentWord, wordsAdded } from "./redux/slicers/typingSlice";
// utils
import { getWords } from "./utils/utils";
// components
import Main from "./components/Main";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const words = getWords();
    dispatch(wordsAdded(words));
    dispatch(setCurentWord({ id: words[0].id, index: 0, word: words[0].word }));
  }, []);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
