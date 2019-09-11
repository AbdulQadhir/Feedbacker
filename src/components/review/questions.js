import React, { Component } from 'react';
import { View, TextInput, Button,Text, TouchableOpacity, ScrollView } from 'react-native';
import { btnStyles, txtStyles, containerStyle } from '../styles';
import CheckBox from 'react-native-check-box';
import GridList from 'react-native-grid-list';
import { Dimensions } from 'react-native';

import Radio from './radio';
import {align,alignHorizontal} from './radio';
import EStyleSheet from 'react-native-extended-stylesheet';

const {height, width} = Dimensions.get('window');
const entireScreenWidth = width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


const eStyles = EStyleSheet.create({
  radioStyle : {
    fontSize : "15 rem",
    marginLeft: "5 rem",
    marginBottom: 5
  },
  qstStyle : {
    fontSize : "15 rem",
  }
   })

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
    <View style={align}>
      <CheckBox
        onClick={()=>{
          this.selAnswer(item.qstnId, item.answer, "multi")
        }}
        isChecked={this.chkAnswer(item.qstnId, item.answer)}
        rightText={item.answer}
        rightTextStyle={eStyles.qstStyle}
        checkBoxColor={"#f03636"}
      />
    </View>
);

chkAnswer = (qstnId, answer) => {
  let answers = this.state.answers;
  answerArr = answers[qstnId] ? answers[qstnId].split(",") : [];
  return (answerArr.indexOf(answer) > -1)
}

selAnswer = (qstnId, answer, ansType) => {
  let answers = this.state.answers;

  if(ansType == "radio")
    answers[qstnId] = answer;
  else
  {
    answerArr = answers[qstnId] ? answers[qstnId].split(",") : [];
    let index = answerArr.indexOf(answer)
    if(index == -1)
      answerArr.push(answer)
    else
      answerArr.splice(index, 1);

    answers[qstnId] = answerArr.join();
  }

  
  this.setState({ answers }, ()=>console.log("Result=>", JSON.stringify(this.state.answers)));
}

renderRadioItem = (item) => {
  return (
    <Radio style={eStyles.radioStyle} isSelected={this.state.answers[item.item.qstnId] == item.item.answer} label={item.item.answer} onPress={() => this.selAnswer(item.item.qstnId, item.item.answer, "radio")} />
  )
}

renderRadio = (qstnId, _answers) => {
  let answers = [];
  _answers.forEach(answer => {
    answers.push({ answer, qstnId });
  });
  return (
    <View style={alignHorizontal}>
      <GridList
        showSeparator
        data={answers}
        numColumns={2}
        renderItem={this.renderRadioItem}
        style={{padding:10}}
      />
    </View>
  );
}

renderMulti = (qstnId,_answers) => {
  let answers = [];
  _answers.forEach(answer => {
    answers.push({ answer, qstnId });
  });
  return (
      <View style={alignHorizontal}>
        <GridList
          showSeparator
          data={answers}
          numColumns={2}
          renderItem={this.renderMultiItem}
          style={{padding:10}}

        />
      </View>
  );
}

renderQstn = (qstn) => {
  return (
    <View>
      <Text style={eStyles.qstStyle} >{qstn.question}</Text>
      {
        qstn.question_type == "multi" ? 
        this.renderMulti(qstn.id, qstn.answers) : <View />
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
