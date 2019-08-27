import React, { Component } from 'react';
import { View, TextInput, Button,Text, TouchableOpacity } from 'react-native';

export default class Radio extends Component {
    render() {
        return (
        <View
         style={{ flexDirection: "row" }} >
          <TouchableOpacity
            onPress={this.props.onPress}
            style={{
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: "#f03636"
            }}>
            {
              this.props.isSelected ?
                <View style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: '#f03636'
                }}/>
                : null
            }
          </TouchableOpacity>
          <Text style={{ marginLeft : 5 }} >{this.props.label}</Text>
        </View>
        )
    }
}