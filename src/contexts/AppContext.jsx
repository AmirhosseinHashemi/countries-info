import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [themeColor, setThemeColor] = useState("light");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      if (themeColor === "light")
        document.documentElement.classList.remove("dark");
      else document.documentElement.classList.add("dark");
    },
    [themeColor],
  );

  return (
    <AppContext.Provider
      value={{ isLoading, setIsLoading, themeColor, setThemeColor }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const data = useContext(AppContext);
  return data;
}

export { AppProvider, useApp };
