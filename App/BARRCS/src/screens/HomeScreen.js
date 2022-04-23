import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
  return (
      <ScrollView>
        <View style = {{flexDirection: 'row'}}>
          <Image style={{width: 130, height: 130, marginLeft: 0, marginTop: 0}}
          source = {require("../images/avatars/avatar1.jpeg")}/>
          <View>
            <Text style = {{fontSize: 24, fontWeight: 'bold', marginLeft: 15}}>Gabby,</Text> 
            <Text style = {{fontSize: 18, marginLeft: 15}}>Sir Barksalot</Text>
            <Text style = {{fontSize: 16, flex: 1, flexWrap: 'wrap', marginRight: 140, marginLeft: 15}}>Today's weather is incredible! Anyone down to meet up at the Quad for a doggy playdate? My pup needs to get some social skills!</Text>
          </View>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <Image style={{width: 130, height: 130, marginLeft: 0, marginTop: 60}}
          source = {require("../images/avatars/avatar2.jpeg")}/>
          <View>
          <Text style = {{fontSize: 24, marginTop: 60, fontWeight: 'bold', marginLeft: 15}}>Richard,</Text>
          <Text style = {{fontSize: 18, marginLeft: 15}}>Pluto</Text>
          <Text style = {{fontSize: 16, flex: 1, flexWrap: 'wrap', marginRight: 140, marginTop: 0, marginLeft: 15}}>Just got a new puppy! Any good dog trainers in town that can help a guy out with some tips and tricks for a new doggo parent?</Text>
          </View>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <Image style={{width: 130, height: 130, marginLeft: 0, marginTop: 60}}
          source = {require("../images/avatars/avatar3.jpeg")}/>
          <View>
          <Text style = {{fontSize: 24, marginTop: 60, fontWeight: 'bold', marginLeft: 15}}>Mr. 44,</Text>
          <Text style = {{fontSize: 18, marginLeft: 15}}>Bo</Text>
          <Text style = {{fontSize: 16, flex: 1, flexWrap: 'wrap', marginRight: 140, marginTop: 0, marginLeft: 15}}>Bo and I looking to meet the lucky giveaway winner at the BARCCS pop up tent!</Text>
          </View>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <Image style={{width: 130, height: 130, marginLeft: 0, marginTop: 60}}
          source = {require("../images/avatars/avatar4.jpeg")}/>
          <View>
          <Text style = {{fontSize: 24, marginTop: 60, fontWeight: 'bold', marginLeft: 15}}>Casey,</Text>
          <Text style = {{fontSize: 18, marginLeft: 15}}>Sarge</Text>
          <Text style = {{fontSize: 16, flex: 1, flexWrap: 'wrap', marginRight: 140, marginTop: 0, marginLeft: 15}}>Just moved to Reno and looking to make some friends! I heard there are some good hikes around here for me and my pup!</Text>
          </View>
        </View>
      </ScrollView>
  );
}



export default HomeScreen;