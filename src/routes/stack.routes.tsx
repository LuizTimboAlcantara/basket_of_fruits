import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn} from '../scenes';
import {FruitsList} from '../scenes/FruitsList';
import {Buy} from '../scenes/Buy';
import {Cart} from '../scenes/Cart';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <stackRoutes.Screen name="SignIn" component={SignIn} />
    <stackRoutes.Screen name="FruitsList" component={FruitsList} />
    <stackRoutes.Screen name="Buy" component={Buy} />
    <stackRoutes.Screen name="Cart" component={Cart} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
