
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';
import { Bungee_400Regular } from '@expo-google-fonts/bungee';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Bungee: Bungee_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Pengenalan Sparepart Sepeda',
            headerStyle: {
              backgroundColor: '#7A3E26',
            },
            headerTintColor: '#FFFFFF',
          }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'Detail Sparepart',
            headerStyle: {
              backgroundColor: '#7A3E26',
            },
            headerTintColor: '#FFFFFF',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
