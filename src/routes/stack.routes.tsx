import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Buy, Cart, SignIn, FruitsList} from '../scenes';

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
