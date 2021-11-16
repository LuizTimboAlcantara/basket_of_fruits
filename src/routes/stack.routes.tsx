import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn} from '../scenes/SignIn';
import {FruitsList} from '../scenes/FruitsList';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <stackRoutes.Screen name="SignIn" component={SignIn} />
    <stackRoutes.Screen name="FruitsList" component={FruitsList} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
