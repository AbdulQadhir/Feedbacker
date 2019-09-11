import React, { Component } from 'react';
import { View, TextInput, ScrollView,Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {height, width} = Dimensions.get('window');
const entireScreenWidth = width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


export default class AutoComplete extends Component {

    state = {
        layout : null,
        showAutoComplete : false,
        data : [
            { name : "name 1", phone: "123456789" },
            { name : "name 12", phone: "123456789" },
            { name : "name 1234", phone: "123456789" },
            { name : "name 12345", phone: "123456789" },
            { name : "name 123456", phone: "123456789" },
        ],
        text : "",
        selectedData : null
    }
    showAutoComplete = () => {
        this.setState({showAutoComplete: true});
    }
    hideAutoComplete = () => {
        this.setState({showAutoComplete: false});
    }
    
    render() {
        
        let Items = this.state.data.filter(datum => datum.name.includes(this.state.text));
        let renderItems = Items.map((datum) => {
            return (
                <TouchableOpacity 
                    onPress={()=>
                        {
                            this.setState({selectedData : datum, text : datum.name});
                            this.hideAutoComplete();
                        }}
                >
                    <Text style={this.props.style} > {datum.name} </Text>
                </TouchableOpacity>
            )
          });
        return (
        <View onPress={this.showAutoComplete} >
            <TextInput style={this.props.style} placeholder={this.props.placeholder}
              onKeyPress={this.showAutoComplete}
              onLayout={event => {
                const layout = event.nativeEvent.layout;
                this.setState({layout});
              }}
              onChangeText={(text)=>this.setState({text})}
              onSubmitEditing={this.hideAutoComplete}
              onFocus={this.props.onFocus}
              value={this.state.text}
            />
            {(this.state.layout && this.state.showAutoComplete && this.props.isFocussed && Items.length>0 && this.state.text!="" && 

                    <View style={{ left: this.state.layout.x,
                            top: this.state.layout.y + this.state.layout.height,
                            width: this.state.layout.width,
                            height: (Math.min(Items.length+1, 4)) * this.state.layout.height,
                            zIndex: 15,
                            position: "absolute",
                            backgroundColor: "#FFF",
                            borderWidth:1,
                            borderColor:"#CCC",
                            elevation: 10
                            }} >
                        <ScrollView>
                            {renderItems}
                        </ScrollView>
                    </View>
            )}


        </View>
        )
    }
}

const eStyles = EStyleSheet.create({
  align:{
    padding:'10 rem',
  },
  alignHorizontal :{
    paddingHorizontal:'20 rem'
  },
   })