import { createContext, useContext, useState } from "react";

export const HomeContext = createContext<any>({});

export function HomeProvider({ children }) {
  const [animate, setAnimate] = useState(false);
  const [display, setDisplay] = useState(true);

  function changeDisplay() {
    setTimeout(() => {
      setDisplay(false);
    }, 500);
  }

  return (
    <HomeContext.Provider
      value={{ animate, setAnimate, setDisplay, display, changeDisplay }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export function useHome() {
  return useContext(HomeContext);
}
