import React, { Component } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';
import { btnStyles, txtStyles, containerStyle, textStyle } from '../styles';


export default class App extends Component {

  static navigationOptions = {
    title: 'CUSTOMER REVIEW',
    headerStyle: {
      backgroundColor: '#f03636',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: "#fff",
      fontWeight: 'bold',
    }
  };


  render() {
   
      return (
        <ScrollView>
          <View style={containerStyle} >
            <TextInput style={txtStyles} placeholder="Salesman" />
            <TextInput style={txtStyles} placeholder="Customer" />
            <TextInput style={txtStyles} placeholder="Mobile Number" />
            <TextInput style={txtStyles} placeholder="Locality" />
            
            <View style={{marginTop:20}}>
                <Button
                  onPress={()=>{ this.props.navigation.navigate("ReviewQuestions") }}
                  style={[btnStyles]}
                  title="Next"
                  color="#f03636"
                />
            </View>
          </View> 
        </ScrollView>
      );
  }
}
