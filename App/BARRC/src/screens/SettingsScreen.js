import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';


const SettingsScreen = () => {
    return(
      <div>
        <Text>Hello Settings</Text>
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

export default SettingsScreen;