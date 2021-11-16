import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn} from '../scenes/SignIn';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <stackRoutes.Screen name="SignIn" component={SignIn} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
