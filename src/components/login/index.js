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
          <View style={{flex:1,flexDirection:'column',height:'100%',justifyContent: 'space-evenly', alignItems: 'center',backgroundColor:"#f03636",}} >
          <View>
              <Image style={eStyles.img}
                source={require('../../img/logo.png')}
              />
          </View>
          <View style={{width:'80%'}}>
              <TextInput style={eStyles.txtStyles} placeholder="User name"  placeholderTextColor="#fff" />
              <TextInput style={eStyles.txtStyles} placeholder="Password" placeholderTextColor="#fff"/>
          </View>
          <View style={{width:'40%'}}>
            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate("Menu") }} style={eStyles.btnStyles}>
                <Text style={eStyles.loginBtn}>Login</Text> 
                    </TouchableOpacity>
          </View>
        
          </View>
      );
  }
}
const eStyles = EStyleSheet.create({
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
      fontSize:'23 rem',
  },
  btnStyles:{
    flex: 1,
    marginHorizontal: '10 rem',
    backgroundColor:'#FFF',
    padding: '25 rem',
    borderRadius:'5 rem',
    justifyContent:'center',
    alignItems:'center',
  },
  loginBtn:{
    textAlign:'center',
    alignSelf:'center',
    color:'#f03636',
    fontSize:'25 rem'
  }
});
