import { createContext, useState, useEffect } from "react";
import { addWord, getWords } from "../utils/firebase-utils";
import { UserContext } from "./user.context";

export const WordsContext = createContext();

const WordsContextProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const { user } = useContext(UserContext);

  const userWords = async () => {
    const words = await getWords(user.uid);
    setWords(words);
  };

    useEffect(() => {
    if (user) {
      userWords();
    }
    }, [user, userWords]);



  const uploadWord = async (word) => {
    if (word.errorMessage) {
        return;
    }
    word = { ...word, userId: user.uid };
    const newWord = await addWord(word);
    setWords([...words, newWord]);
  }

  console.log(uploadWord)


  return (
    <WordsContext.Provider value={{ words, setWords, uploadWord  }}>
      {children}
    </WordsContext.Provider>
  );
}


export default WordsContextProvider;