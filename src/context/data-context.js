import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../reducer/dataReducer";

const DataContext = createContext();
const initialState = { userName: "" };

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
