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
import HomeStack from './src/HomeStack';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={size} />
      ),
    }}/>
        <Tab.Screen name="Profile" component={HomeStack} options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color, size }) => (
        <EvilIcons name="user" color={color} size={size} />
      ),
    }}/>
        <Tab.Screen name="Bluetooth" component={BluetoothPairingScreen} options={{
      tabBarLabel: 'Bluetooth',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="bluetooth" color={color} size={size} />
      ),
    }}/>
    <Tab.Screen name="Setting" component={SettingScreen} options={{
      tabBarLabel: 'Setting',
      tabBarIcon: ({ color, size }) => (
        <Feather name="settings" color={color} size={size} />
      ),
    }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
