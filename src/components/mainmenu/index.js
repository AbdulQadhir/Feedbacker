import React, { Component } from 'react';
import { View,  TouchableOpacity,Text,Image ,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';

const {height, width} = Dimensions.get('window');
const entireScreenWidth = width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


export default class App extends Component {
  static navigationOptions = {
    header: null
}
  render() {
    const {navigate} = this.props.navigation;
      return (
       <View style={{flex:1,flexDirection:'column',justifyContent: 'space-evenly',height:'100%', alignItems: 'center'}} >
            
            <TouchableOpacity onPress={() => navigate('Sales')} style={eStyles.btnStyles}>   
                <Icon name="bar-chart" size={70}  color="#fff" />
                <Text style={eStyles.txtStyles}>SALES REPORT</Text>
                 
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigate('Review')}  style={eStyles.btnStyles}> 
                <Icon name="users" size={70}  color="#fff" />
                <Text style={eStyles.txtStyles}>REVIEW</Text>      
            </TouchableOpacity>
      </View>
      );
  }
}

const eStyles = EStyleSheet.create({

  txtStyles: {
      color:'#FFF',
      fontSize:'30 rem',
  },
  btnStyles:{
    flexDirection:'column',
    height:'200 rem',
    width:'200 rem',
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'space-evenly',
    elevation:5,
    borderRadius:5,
  },
});

