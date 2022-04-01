import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SettingsScreen} from './SettingsScreen';



const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return(
        <View>
          <View>
            <Text>Hello Home</Text>
          </View>
        
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

export default HomeScreen;