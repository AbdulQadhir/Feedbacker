import React, {Fragment, Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import Screen from './src/pages/customerReviewQstn';

export default class App extends Component {
  render = () => (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Screen />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
