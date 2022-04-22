import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const ButtonAlert = () =>
  setTimeout(() => {Alert.alert(
    "Alert",
    "Bluetooth Paired Successfully",
  );}, 5000)
    

const BluetoothPairingScreen = () => {
    return(
      <View style = {{marginTop: 300}}>
        <TouchableOpacity onPress={ButtonAlert}>
           <Text style = {{fontSize: 36, marginLeft: 115, color: "royalblue" }}>Pair Device</Text>
        </TouchableOpacity>
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