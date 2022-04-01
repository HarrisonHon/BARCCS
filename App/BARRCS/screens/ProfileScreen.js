import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SettingsScreen} from './SettingsScreen';




const ProfileScreen = () => {
    return(
        <View >
          <View style = {{flexDirection: 'row'}}>
            <Text style = {{marginLeft: 20, marginTop: 60, fontSize: 30, fontWeight: 'bold'}}>The Rock, </Text>
            <Text style = {{marginLeft: 0, marginTop: 60, fontSize: 30,}}> 49</Text>
            <Text style = {{marginLeft: 20, marginTop: 60, fontSize: 30, fontWeight: 'bold'}}> Roco, </Text>
            <Text style = {{marginLeft: 0, marginTop: 60, fontSize: 30, }}> 14</Text>
          </View>
        
          <View style = {{flexDirection: 'row'}}>
            <Text style = {{marginLeft: 20, marginTop: 280, fontSize: 24, fontWeight: 'bold', color: 'red'}}>Tier 2</Text>
            <Text style = {{marginLeft: 0, marginTop: 283, fontSize: 20, }}> - Owner and Dog info is shared</Text>
          </View>
          <View style = {{flexDirection: 'row'}}>
            <Text style = {{marginLeft: 20, marginTop: 35, fontSize: 24, fontWeight: 'bold',}}>Bio</Text>
            <Text style={{flex: 1, flexWrap: 'wrap', marginRight: 10, marginTop: 75, fontSize: 14, marginLeft: -25 }}>asdjfhosiahdfiuashdfiouashfiuashdoifahsoidfuhsaiudhfiasudhfoisdhfoaisasdjfhosiahdfiuashdfiouashfiuashdoifahsoidfuhsaiudhfiasudhfoisdhfoaisasdjfhosiahdfiuashdfiouashfiuashdoifahsoidfuhsaiudhfiasudhfoisdhfoaisasdjfhosiahdfiuashdfiouashfiuashdoifahsoidfuhsaiudhfiasudhfoisdhfoaisasdjfhosiahdfiuashdfiouashfiuashdoifahsoidfuhsaiudhfiasudhfoisdhfoaisasdjfhosiahdfiuashdfiouashfiuashdoifahsoidfuhsaiudhfiasudhfoisdhfoaisasdjfhosiahdfiuashdfiouashfiuashdoifahsoidfuhsaiudhfiasudhfoisdhfoais</Text>
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

export default ProfileScreen;