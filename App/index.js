import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import CalculatorScreen from './screen/calculatorScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor="#14141D"
        showHideTransition="fade"
        hidden
      /> */}

      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
