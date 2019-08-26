import React, {Fragment, Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import Screen from './src/components/navigator';

import Login from "./src/components/login"
import Review from "./src/components/review"
import ReviewQuestions from "./src/components/review/questions"
import Sales from "./src/components/salesreport"

export default class App extends Component {
  render = () => (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ReviewQuestions />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
