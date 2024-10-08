import React from 'react';
import HomeScreen from './screens/HomeScreen';
import TaskManager from './screens/TaskManager';
import AdderScreen from './screens/Add';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Task" component={TaskManager}  options={{ headerShown: false }}/>
        <Stack.Screen name="Add" component={AdderScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
