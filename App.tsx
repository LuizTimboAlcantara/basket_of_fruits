import React from 'react';
import {StatusBar} from 'react-native';
import {FruitsProvider} from './src/contexts/cart';

import Routes from './src/routes';

export default function App() {
  return (
    <FruitsProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </FruitsProvider>
  );
}
