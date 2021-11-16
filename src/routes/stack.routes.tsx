import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn} from '../scenes/SignIn';
import {FruitsList} from '../scenes/FruitsList';
import {Buy} from '../scenes/Buy';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <stackRoutes.Screen name="SignIn" component={SignIn} />
    <stackRoutes.Screen name="FruitsList" component={FruitsList} />
    <stackRoutes.Screen name="Buy" component={Buy} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
