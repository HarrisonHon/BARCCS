import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SettingsScreen} from './SettingsScreen';



const BluetoothPairingScreen = () => {
    return(
        <View>
        <Text>Hello BluetoothPairingScreen</Text>
          {/* <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
          </Tab.Navigator> */}
      </View>

    );
};

const styles = StyleSheet.create({
    pageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%',
    },
  });

export default BluetoothPairingScreen;