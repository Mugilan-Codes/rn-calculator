import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import ButtonPanel from './containers/buttons';

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

      <ButtonPanel />
    </SafeAreaView>
  );
};

export default App;
