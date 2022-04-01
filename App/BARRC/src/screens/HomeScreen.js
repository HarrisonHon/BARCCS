import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SettingsScreen} from './SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return(
        <div>
        <Text>Hello Home</Text>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
      </div>

    );
;}

const styles = StyleSheet.create({
    pageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%',
    },
  });

export default HomeScreen;