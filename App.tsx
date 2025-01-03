/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 50, fontFamily: getFontFamily('Inter', '900')}}>
        Hello World!
      </Text>
    </SafeAreaView>
  );
};

export default App;
