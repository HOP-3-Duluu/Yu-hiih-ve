import React from 'react';
import { StackNavigator } from '../navigations/StackNavigator';
import { DataContextProvider } from '../context/DataContext';

const App = () => {
  return (
    <DataContextProvider>
      <StackNavigator/>
    </DataContextProvider>
  );
};

export default App;
