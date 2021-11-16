import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FruitsContextProps {
  getFruits: () => Promise<[]>;
  saveFruits: (newFruits: []) => Promise<void>;
}

const fruitsContext = React.createContext<FruitsContextProps>(
  {} as FruitsContextProps,
);

export const FruitsProvider: React.FC = ({children}) => {
  const dataKey = '@fruitsApp:myfruits';

  async function getFruits() {
    const data = await AsyncStorage.getItem(dataKey);
    const currentData = data ? JSON.parse(data) : [];

    return currentData;
  }

  async function saveFruits(newFruits: []) {
    await AsyncStorage.setItem(dataKey, JSON.stringify(newFruits));
  }

  return (
    <fruitsContext.Provider value={{getFruits, saveFruits}}>
      {children}
    </fruitsContext.Provider>
  );
};

export default fruitsContext;
