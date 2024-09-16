import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screens/Home';
// import Sobre  from 'screens/Sobre';
import Calculadora from './screens/Calculadora';
import Sobrew from './screens/Sobrew';

const Stack = createStackNavigator();

function MyStack() {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Home" component= {Home} />
    <Stack.Screen name="Sobre" component= {Sobrew} />
    <Stack.Screen name="Calculadora" component= {Calculadora} />
  </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
