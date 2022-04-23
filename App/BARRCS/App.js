import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import BluetoothPairingScreen from './src/screens/BluetoothPairingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, EvilIcons, Feather } from '@expo/vector-icons';
import SettingScreen from './src/screens/SettingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Component } from 'react';

const Stack = createStackNavigator();

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false }}/>
          <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false }}/>
          <Stack.Screen name="Bluetooth" component={BluetoothPairingScreen} options={{headerShown: false }}/>
      <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
