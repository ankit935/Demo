import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Details, Home} from '../screens';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  const renderAuthStack = () => (
    <>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </>
  );

  return (
    <Stack.Navigator headerMode="none">{renderAuthStack()}</Stack.Navigator>
  );
}
