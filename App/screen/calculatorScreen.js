import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CalcButton from '../components/CalcButton';

const CalculatorScreen = () => {
  const [prevValue, setPrevValue] = useState(100);
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <Text>History</Text>
      </View>

      <View style={styles.display}>
        <Text style={styles.previousText}>{prevValue}</Text>

        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View>
        <View style={styles.row}>
          <CalcButton text="AC" color="cyan" />
          <CalcButton text="+/-" color="cyan" />
          <CalcButton text="%" color="cyan" />
          <CalcButton text="/" color="orange" />
        </View>

        <View style={styles.row}>
          <CalcButton text="7" />
          <CalcButton text="8" />
          <CalcButton text="9" />
          <CalcButton text="X" color="orange" />
        </View>

        <View style={styles.row}>
          <CalcButton text="4" />
          <CalcButton text="5" />
          <CalcButton text="6" />
          <CalcButton text="-" color="orange" />
        </View>

        <View style={styles.row}>
          <CalcButton text="1" />
          <CalcButton text="2" />
          <CalcButton text="3" />
          <CalcButton text="+" color="orange" />
        </View>

        <View style={styles.row}>
          <CalcButton
            text="0"
            isLarge
            onPress={() => console.log('Button clicked')}
          />
          <CalcButton text="." />
          <CalcButton text="=" backgroundColor="orange" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000111',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  previousText: {
    color: '#DDDDDD',
  },
  resultText: {
    fontSize: 50,
    color: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CalculatorScreen;
