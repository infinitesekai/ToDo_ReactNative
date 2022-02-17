import React, { useContext } from 'react';
import Home from './Home';
import ToDoInput from './ToDoInput';
import AppProvider from './AppContext';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const App = () => {


  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ToDoInput" component={ToDoInput} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>

  );
};


export default App;
