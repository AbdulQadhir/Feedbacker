import React, { Component } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';
import { btnStyles, txtStyles, containerStyle, textStyle } from '../styles';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AutoComplete from "./autocomplete";

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

  state = {
    customerFocussed : false
  }

  componentDidMount()
  {
      console.log("Feedbacker=>",'Component width' );
      
      this.myComponent.measure( (fx, fy, width, height, px, py) => {
          console.log("Feedbacker=>",'Component width is: ' + width)
          console.log("Feedbacker=>",'Component height is: ' + height)
          console.log("Feedbacker=>",'X offset to frame: ' + fx)
          console.log("Feedbacker=>",'Y offset to frame: ' + fy)
          console.log("Feedbacker=>",'X offset to page: ' + px)
          console.log("Feedbacker=>",'Y offset to page: ' + py)
      }) 
  }

  
  unsetCustomerFocus = () => {
    this.setState({customerFocussed: false});
  }
  
  setCustomerFocus = () => {
    this.setState({customerFocussed: true});
  }

  render() {
   
      return (
        <ScrollView>
          <View style={containerStyle} >
            <TextInput style={txtStyles} placeholder="Salesman" onFocus={this.unsetCustomerFocus}  ref={view => { this.myComponent = view; }}  />
            <AutoComplete style={txtStyles} placeholder="Customers" onBlur={this.unsetCustomerFocus} onFocus={this.setCustomerFocus}  isFocussed={this.state.customerFocussed} />
            <TextInput style={txtStyles} placeholder="Mobile Number" />
            <TextInput style={txtStyles} placeholder="Locality" />
            <Text>{JSON.stringify(this.state.customerFocussed)}</Text>
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