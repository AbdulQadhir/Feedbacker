import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity,StyleSheet,Image,Text } from 'react-native';
import { Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');


export default class App extends Component {
  render() {
   
      return (
          <View style={{flex:0,flexDirection:'column',justifyContent: 'space-evenly', alignItems: 'center', height:height>600 ? height : 600,width:width,backgroundColor:"#f03636",}} >
          <View>
              <Image style={{height:300,width:300}}
                source={require('../../img/logo.png')}
              />
          </View>
          <View style={{width:250}}>
              <TextInput style={styles.txtStyles} placeholder="User name"  placeholderTextColor="#fff" />
              <TextInput style={styles.txtStyles} placeholder="Password" placeholderTextColor="#fff"/>
          </View>
          <View style={{width:250}}>
                  <TouchableOpacity  style={styles.btnStyles}>
                        <Text style={{ textAlign:'center',
    alignSelf:'center',color:'#f03636', fontSize:25}}>Login</Text> 
                    </TouchableOpacity>
          </View>
        
          </View>
      );
  }
}

const styles = StyleSheet.create({
  txtStyles: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "transparent",
      borderBottomColor: "#CCC",
      borderBottomWidth: 1,
      marginTop: 10,
      padding: 5,
      color:'#FFF',
      fontSize:25,
  },
  btnStyles:{
    flex: 1,
    marginHorizontal: 10,
    backgroundColor:'#FFF',
    padding: 25,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  }
});
