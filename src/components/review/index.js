import React, { Component } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';
import { btnStyles, txtStyles, containerStyle, textStyle } from '../styles';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {height, width} = Dimensions.get('window');
const entireScreenWidth = width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


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
            
            <View style={eStyles.btn}>
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

const eStyles = EStyleSheet.create({
  btn:{
    marginTop:'20 rem',
  }
   })