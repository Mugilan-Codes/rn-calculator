import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CalcButton from '../components/CalcButton';

const CalculatorScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>History</Text>
      </View>

      <View style={styles.display}>
        <Text>Result</Text>
      </View>

      <View style={styles.row}>
        <CalcButton text="AC" />
        <CalcButton text="+/-" />
        <CalcButton text="%" />
        <CalcButton text="/" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CalculatorScreen;
