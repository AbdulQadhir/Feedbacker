import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity,StyleSheet,Image,Text,ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {height, width} = Dimensions.get('window');
const entireScreenWidth = width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export default class App extends Component {
    
    static navigationOptions = {
        header: null,
    };

    render() {
      const {navigate} = this.props.navigation;
      return (
          <View style={{flex:1,flexDirection:'column',height:'50%',justifyContent: 'space-evenly', alignItems: 'center',backgroundColor:"#f03636",}} >
          <View>
              <Image style={eStyles.img}
                source={require('../../img/logo.png')}
              />
          </View>
          <View style={{ alignItems: "center" }} >
              <Image style={eStyles.imgSmiley}
                source={require('./smiley2.gif')}
              />
                <Text style={eStyles.thankText}>Thank You</Text> 
          </View>
        
          </View>
      );
  }
}
const eStyles = EStyleSheet.create({
    imgSmiley:{
        height:'100 rem',
        width:'100 rem'
       },
       img:{
    height:'250 rem',
    width:'250 rem'
   },
  txtStyles: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "transparent",
      borderBottomColor: "#CCC",
      borderBottomWidth: 1,
      padding: 5,
      color:'#FFF',
      fontSize:'22 rem',
  },
  btnStyles:{
    flex: 1,
    marginHorizontal: '10 rem',
    backgroundColor:'#FFF',
    padding: '22 rem',
    borderRadius:'5 rem',
    justifyContent:'center',
    alignItems:'center',
  },
  thankText:{
    textAlign:'center',
    alignSelf:'center',
    color:'#FFF',
    fontSize:'25 rem',
    fontWeight: "bold"
  }
});
