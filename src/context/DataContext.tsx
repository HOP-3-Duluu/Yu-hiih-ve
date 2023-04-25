import {createContext, useContext} from 'react';

export const DataType = createContext({
  popular: [],
});

export const DataContextProvider = ({children}: any) => {
  const popular: never[] = [];

  return <DataType.Provider value={{popular}}>{children}</DataType.Provider>;
};

export const useDataContext = () => {
  return useContext(DataType);
};
