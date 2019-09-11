import React, { Component } from 'react';
import { View, TextInput, Button,Text,ScrollView } from 'react-native';
import { btnStyles, txtStyles, containerStyle, textStyle } from '../styles';
import CheckBox from 'react-native-check-box';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {height, width} = Dimensions.get('window');
const entireScreenWidth = width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


export default class App extends Component {
  
  static navigationOptions = {
    title: 'SALES REPORT',
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
    isChecked: false
}


  render() {
    var radio_props_lost = [
      {label: 'No selection', value: 0 },
      {label: 'Making charge', value: 1 },
      {label: 'Communication gap', value: 2 },
      {label: 'Credit fecility', value: 3 },
      {label: 'Competetor offer', value: 4 }
    ];

    var radio_props_status = [
      {label: 'Sale closed. Item take away', value: 0 },
      {label: 'Sale closed. Advance payed', value: 1 },
      {label: 'Exchange gold. Item take away ', value: 2 },
      {label: 'Add on sale/Revisit', value: 3 },
      {label: 'Estimate/Shop visit-contact on', value: 4 }
    ];
      return (
        <ScrollView>
        <View style={containerStyle} >
          <TextInput style={eStyles.txtStyles2} placeholder="Salesman" />
          <TextInput style={eStyles.txtStyles2} placeholder="Customer" />
          <TextInput style={eStyles.txtStyles2} placeholder="Mobile" />
          <TextInput style={eStyles.txtStyles2} placeholder="House name" />
          <TextInput style={eStyles.txtStyles2} placeholder="Locality" />
          <TextInput style={eStyles.txtStyles2} placeholder="Panchayath" />
          <TextInput style={eStyles.txtStyles2} placeholder="B.Exe/Reference" />
          <TextInput style={eStyles.txtStyles2} placeholder="Function Date" />
          <Text  style={textStyle}>Sale Lost</Text>
          <View style={eStyles.align}>
            
            <RadioForm
                style={eStyles.radio}
                radio_props={radio_props_lost}
                initial={0}
                buttonColor={"#f03636"}
                selectedButtonColor={"#f03636"}
                buttonSize={8}
                onPress={(value) => {this.setState({value:value})}}
              />
          </View>
          <Text style={eStyles.txtStyles2}>Sale Status</Text>
          <View style={eStyles.align}>
              <RadioForm
                radio_props={radio_props_status}
                initial={0}
                buttonColor={"#f03636"}
                selectedButtonColor={"#f03636"}
                buttonSize={8}
                onPress={(value) => {this.setState({value:value})}}
              />
          </View>
          <TextInput style={txtStyles} placeholder="Remarks" />
          <View style={eStyles.btn}>
              <Button
                onPress={()=>{this.props.navigation.navigate("ThankYou")}}
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
  align:{
    paddingLeft:'20 rem',
  },
  btn :{
    marginTop:'20 rem'
  },
  radio:{
    paddingTop:'5 rem'
  },
  txtStyles2 : {
    fontSize : "15 rem",
    backgroundColor: "transparent",
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    marginTop: 10,
    padding: "5 rem",
    marginHorizontal: "10 rem"
  }
   })