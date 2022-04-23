import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import { Component } from 'react';


const MatchScreen = () => {
    return(
      <View style = {{marginTop: 300}}>
        <TouchableOpacity>
           <Text>
             MATCH
           </Text>
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

export default MatchScreen;