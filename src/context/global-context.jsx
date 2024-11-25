import { useState, createContext, useContext } from "react";

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [list, setList] = useState({});
  const [dateInput, setDateInput] = useState();
  const [showTodoData, setShowTodoData] = useState({});
  return (
    <GlobalContext.Provider
      value={{
        list,
        setList,
        dateInput,
        setDateInput,
        showTodoData,
        setShowTodoData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
