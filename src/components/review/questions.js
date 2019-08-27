import React, { Component } from 'react';
import { View, TextInput, Button,Text, TouchableOpacity, ScrollView } from 'react-native';
import { btnStyles, txtStyles, containerStyle } from '../styles';
import CheckBox from 'react-native-check-box';
import GridList from 'react-native-grid-list';
import { Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
import Radio from './radio';

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
    id: 2,
    question: "Question 2",
    question_type: "radio",
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
    id: 4,
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
    id: 5,
    question: "Question 5",
    question_type: "text",
    answers: [
    ],
    shopId: "shop3"
  }
];

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
    isChecked: false,
    answers : []
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

selAnswer = (qstnId, answer) => {
  let answers = this.state.answers;
  answers[qstnId] = answer;
  this.setState({ answers })
}

renderRadio = (qstnId, answers) => {
    return answers.map((answer) => {
      return (
        <Radio isSelected={this.state.answers[qstnId] == answer} label={answer} onPress={() => this.selAnswer(qstnId, answer)} />
      )}
  )
}

renderMulti = (answers) => {
  console.log("reult=>", JSON.stringify(answers));
  return (
      <View style={{ paddingHorizontal: 20 }}>
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
        this.renderRadio(qstn.id, qstn.answers) : <View />
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
        <ScrollView>
          <View style={containerStyle} >
          {questions.map(qstn => this.renderQstn(qstn))}
          
            <Button
              style={btnStyles}
              title="Next"
              color="#f03636"
            />
          
          </View>
        </ScrollView>
      );
  }
}
