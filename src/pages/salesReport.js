import React, { Component } from 'react';
import { View, TextInput, Button,Text } from 'react-native';
import { btnStyles, txtStyles, containerStyle, textStyle } from './styles';
import CheckBox from 'react-native-check-box';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


export default class App extends Component {
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
        <View style={containerStyle} >
          <TextInput style={txtStyles} placeholder="Salesman" />
          <TextInput style={txtStyles} placeholder="Customer" />
          <TextInput style={txtStyles} placeholder="Mobile" />
          <TextInput style={txtStyles} placeholder="House name" />
          <TextInput style={txtStyles} placeholder="Locality" />
          <TextInput style={txtStyles} placeholder="Panchayath" />
          <TextInput style={txtStyles} placeholder="B.Exe/Reference" />
          <TextInput style={txtStyles} placeholder="Function Date" />
          <Text  style={textStyle}>Sale Lost</Text>
          <View style={{paddingLeft:20}}>
            
            <RadioForm
                radio_props={radio_props_lost}
                initial={0}
                buttonColor={"#f03636"}
                selectedButtonColor={"#f03636"}
                buttonSize={8}
                onPress={(value) => {this.setState({value:value})}}
              />
          </View>
          <Text style={textStyle}>Sale Status</Text>
          <View style={{paddingLeft:20}}>
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
          <View style={{marginTop:20}}>
              <Button
                style={[btnStyles]}
                title="Next1"
                color="#f03636"
              />
          </View>
        </View>
      );
  }
}
