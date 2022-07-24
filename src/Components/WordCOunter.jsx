import { useContext } from "react";
import context from "../context/Context";

function WordCounter() {
  const { state } = useContext(context);

  const calculateWords = () => {
    const wordsArr = state.text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  };

  return <p>Words Count: {calculateWords()}</p>;
}

export default WordCounter;
