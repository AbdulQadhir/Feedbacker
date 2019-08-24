import React, { Component } from 'react';
import { View, TextInput, Button,Text,Image } from 'react-native';
import { btnStyles, txtStyles, containerStyle } from './styles';
import CheckBox from 'react-native-check-box';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import GridList from 'react-native-grid-list';
import { Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

const questions = [
  {
    id: 1,
    question: "Question 1",
    question_type: "multi",
    answers: [
      "ans 1",
      "ans 2",
      "ans 3",
      "ans 4",
      "ans 5",
    ]
  },
  {
    id: 1,
    question: "Question 2",
    question_type: "multi",
    answers: [
      "ans 1",
      "ans 2",
      "ans 3",
      "ans 4",
      "ans 5",
    ],
    shopId: "shop2"
  },
  {
    id: 1,
    question: "Question 4",
    question_type: "radio",
    answers: [
      "ans 1",
      "ans 2",
      "ans 3",
      "ans 4",
      "ans 5",
    ],
    shopId: "shop3"
  },
  {
    id: 1,
    question: "Question 5",
    question_type: "text",
    answers: [
    ],
    shopId: "shop3"
  }
];


export default class App extends Component {
  state = {
    isChecked: false,
}

renderMultiItem = ({ item, index }) => (
  <View style={{padding:10}}>
    <CheckBox
      onClick={()=>{
        this.setState({
            isChecked:!this.state.isChecked
        })
      }}
      isChecked={this.state.isChecked}
      rightText={item}
      checkBoxColor={"#f03636"}
    />
  </View>
);

renderRadio = (answers) => {
  objArr = [];
  for(i=0; i<answers.length; i++)
    objArr.push({ label: answers[i], value: answers[i] })
    
  return (
    <View style={{padding:10}}>
      <RadioForm
        formHorizontal={false}
        radio_props={objArr}
        initial={0}
        buttonColor={"#f03636"}
        selectedButtonColor={"#f03636"}
        buttonSize={8}
        onPress={(value) => {this.setState({value:value})}}
      />
    </View>
  )
}

renderMulti = (answers) => {
  console.log("reult=>", JSON.stringify(answers));
  return (
      <View style={{flex:1,flexDirection:'row'}}>
        <GridList
          showSeparator
          data={answers}
          numColumns={2}
          renderItem={this.renderMultiItem}
        />
      </View>
  );
}

renderQstn = (qstn) => {
  return (
    <View>
      <Text>{qstn.question}</Text>
      {
        qstn.question_type == "multi" ? 
        this.renderMulti(qstn.answers) : <View />
      }
      {
        qstn.question_type == "radio" ? 
        this.renderRadio(qstn.answers) : <View />
      }
      {
        qstn.question_type == "text" ? 
        (
          <TextInput />
        ) : <View />
      }
    </View>
  );
}

  render() {
      return (
        <View style={containerStyle} >
        {questions.map(qstn => this.renderQstn(qstn))}
         
          <Button
            style={btnStyles}
            title="Next"
            color="#f03636"
          />
          
        </View>
      );
  }
}
