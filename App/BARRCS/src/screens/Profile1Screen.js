import { Component } from 'react';


export default class Profile1Screen extends Component{
    render(){

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
}