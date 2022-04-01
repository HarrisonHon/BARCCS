import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';


const SettingsScreen = () => {
    return(
      <View>
        <Text style={{ color: 'red', marginLeft: 100, marginTop: 300, fontSize: 36,

       }}>Subscription</Text>
      </View>
      

    );
};


export default SettingsScreen;