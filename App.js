import React, {Fragment, Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import Screen from './src/components/navigator';

export default class App extends Component {
  render = () => (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex:1 }} >
          <Screen />
      </SafeAreaView>
    </Fragment>
  );
}
