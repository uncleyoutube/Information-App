import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputScreen from './pages/InputScreen';
import DisplayScreen from './pages/DisplayScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Input">
        <Stack.Screen name="Input" component={InputScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Display" component={DisplayScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}