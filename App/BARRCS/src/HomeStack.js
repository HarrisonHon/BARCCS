import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { render } from 'react-dom';
import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MatchScreen from './screens/MatchScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name ="ProfileScreen" component={ProfileScreen} options={{headerShown: false}}/>
            <Stack.Screen name ="Match" component={MatchScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default HomeStack;