// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './App';
import NewHomeScreen from './NewHome';


const Stack = createStackNavigator();

const Navig = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewHome" component={NewHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navig;
