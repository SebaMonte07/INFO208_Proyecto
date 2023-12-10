import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import OpcionesScreen from './screens/OpScreen';
import ForoScreen from './screens/ForoScreen';
import PregFrecScreen from './screens/PregFrecScreen';
import CalendarioScreen from './screens/CalendarioScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login" component={LoginScreen}
          options={{ headerShown: false }} // Oculta el encabezado en la pantalla "LoginScreen"
        /> 
        <Stack.Screen
        name="Opciones" component={OpcionesScreen}
        />
        <Stack.Screen
        name="ForoConsultas" component={ForoScreen}
        />
        <Stack.Screen
        name="PreguntasFrecuentes" component={PregFrecScreen}
        />
        <Stack.Screen
        name="Calendario" component={CalendarioScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
