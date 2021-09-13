import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import MainScreen from './screens/main';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor="#14141D"
        showHideTransition="fade"
        hidden
      />

      <MainScreen />
    </SafeAreaView>
  );
};

export default App;
