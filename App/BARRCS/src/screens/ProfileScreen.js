import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { render } from 'react-dom';
import React, {useState} from 'react';






const ProfileScreen = ({navigation}) => {
  const [shouldShow, setShouldShow] = useState(true);
  if(shouldShow){
    return(
        <View >    
                  <View>
          <TouchableOpacity onPress={()=> navigation.navigate("Match")}>
            <Text>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
          <View style = {{flexDirection: 'row'}}>
            <Text style = {{marginLeft: 20, marginTop: 60, fontSize: 30, fontWeight: 'bold'}}>The Rock, </Text>
            <Text style = {{marginLeft: 0, marginTop: 60, fontSize: 30,}}> 49</Text>
            <Text style = {{marginLeft: 20, marginTop: 60, fontSize: 30, fontWeight: 'bold'}}> Roco, </Text>
            <Text style = {{marginLeft: 0, marginTop: 60, fontSize: 30, }}> 14</Text>
          </View>
          <View>
          <Image style={{width: 300, height: 250, marginLeft: 50, marginTop: 50}}
          source={require('../images/Profile.png')} />  
          </View>
        
          <View style = {{flexDirection: 'row'}}>
            <Text style = {{marginLeft: 20, marginTop: 50, fontSize: 24, fontWeight: 'bold', color: 'red'}}>Tier 2</Text>
            <Text style = {{marginLeft: 0, marginTop: 53, fontSize: 20, }}> - Owner and Dog info is shared</Text>
          </View>
          <View style = {{flexDirection: 'row'}}>
            <Text style = {{marginLeft: 20, marginTop: 35, fontSize: 24, fontWeight: 'bold',}}>Bio</Text>
            <Text style={{flex: 1, flexWrap: 'wrap', marginRight: 10, marginTop: 75, fontSize: 14, marginLeft: -25 }}>Hey it's Dwayne! Some of my hobbies are working out, acting, and philanthrophy! Rocco and I love to make friends and find others that enjoy similar hobbies! Rocco is my little old guy who loves to make friends just like me.</Text>
          </View>
          <Button
          onPress={() => setShouldShow(!shouldShow)}
          title="Change Tier"
          color="#841584"/>
      </View>
    );
  }
  else{
    return(
      <View>
        <View style = {{flexDirection: 'row'}}>
            <Text style = {{marginLeft: 20, marginTop: 60, fontSize: 30, fontWeight: 'bold'}}> Roco, </Text>
            <Text style = {{marginLeft: 0, marginTop: 60, fontSize: 30, }}> 14</Text>
          </View>
          <View>
          <Image style={{width: 410, height: 350, marginTop:10 }}
          source={require('../images/Dog.png')} />  
          </View>
          <View style = {{flexDirection: 'row'}}>
            <Text style = {{marginLeft: 20, marginTop: 30, fontSize: 24, fontWeight: 'bold', color: 'red'}}>Tier 1</Text>
            <Text style = {{marginLeft: 0, marginTop: 33, fontSize: 20, }}> - Dog info is shared</Text>
          </View>
          <View style = {{flexDirection: 'row'}}>
            <Text style = {{marginLeft: 20, marginTop: 35, fontSize: 24, fontWeight: 'bold',}}>Bio</Text>
            <Text style={{flex: 1, flexWrap: 'wrap', marginRight: 10, marginTop: 75, fontSize: 14, marginLeft: -25 }}>Rocco is a gentle, loving old dog that loves to make friends! Match with Rocco and catch him at your local dog park sniffing the flowers and digging some holes.</Text>
          </View>
        <Button
          onPress={() => setShouldShow(!shouldShow)}
          title="Change Tier"
          color="#841584"/>
      </View>
      
    )
  }
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