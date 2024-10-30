import React from 'react';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import TaskManager from './components/TaskManager';
import AdderScreen from './components/Add';
import HomeScreen from './components/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => (
  <RecoilRoot>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Task" component={TaskManager}  options={{ headerShown: false }}/>
        <Stack.Screen name="Add" component={AdderScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  </RecoilRoot>
    
  
);

export default App;
