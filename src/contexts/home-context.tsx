import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const HomeContext = createContext<any>({});

export function HomeProvider({ children }) {
  const [animate, setAnimate] = useState(false);
  const [display, setDisplay] = useState(false);
  const [quizDetail, setQuizDetail] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://guarded-springs-32113.herokuapp.com/quizDetails"
      );
      setQuizDetail(response.data.quizDetails);
    })();
  }, []);

  function changeDisplay() {
    setTimeout(() => {
      setDisplay(false);
    }, 500);
  }

  return (
    <HomeContext.Provider
      value={{
        animate,
        setAnimate,
        setDisplay,
        display,
        changeDisplay,
        quizDetail,
        setQuizDetail,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export function useHome() {
  return useContext(HomeContext);
}
