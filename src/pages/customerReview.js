import React, { Component } from 'react';
import { View, TextInput, Button,Text } from 'react-native';
import { btnStyles, txtStyles, containerStyle, textStyle } from './styles';


export default class App extends Component {


  render() {
   
      return (
        <View style={containerStyle} >
          <TextInput style={txtStyles} placeholder="Salesman" />
          <TextInput style={txtStyles} placeholder="Customer" />
          <TextInput style={txtStyles} placeholder="Mobile Number" />
          <TextInput style={txtStyles} placeholder="Locality" />
          
          <View style={{marginTop:20}}>
              <Button
                style={[btnStyles]}
                title="Next"
                color="#f03636"
              />
          </View>
        </View>
      );
  }
}
