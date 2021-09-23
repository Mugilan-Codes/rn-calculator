import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CalculatorScreen from './screen/calculatorScreen';
import HistoryScreen from './screen/history';

const Stack = createNativeStackNavigator();

const RootNavigation = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={CalculatorScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="History"
      component={HistoryScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          animated
          barStyle="dark-content"
          backgroundColor="#14141D"
          showHideTransition="fade"
          hidden
        />

        <RootNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
