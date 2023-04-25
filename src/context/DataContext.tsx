import {createContext, useContext, useState} from 'react';

export const DataType = createContext({
  popular: []
})

export const DataContextProvider = ({children}: any) => {
  const popular: never[] = [];

  <DataType.Provider value={{popular}}>
    {children}
  </DataType.Provider>
} 

export const useDataContext = () => {
  return useContext(DataType);
};