import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import CalcButton from '../components/CalcButton';
import {OPERATORS, NUMBERS} from '../constants';

const Container = styled.View`
  flex: 1;
  background-color: #111111;
`;

const HistoryButton = styled.Button``;

const ResultView = styled.View`
  flex: 2;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ButtonPanelView = styled.View``;

const ButtonRow = styled.View`
  flex-direction: row;
`;

const CalculatorScreen = () => {
  const [prevValue, setPrevValue] = useState('');
  const [result, setResult] = useState('0');

  const onPressHandler = text => {
    switch (text) {
      case OPERATORS.posneg:
        setResult(result * -1);
        return;
      case OPERATORS.clear:
        setResult('0');
        return;
      case OPERATORS.dot:
        if (result.includes(OPERATORS.dot)) {
          return;
        }
        setResult(result + OPERATORS.dot);
        return;
    }
  };

  const displayNumber = text => {
    if (result.length > 10) {
      return;
    }

    if (result === '0') {
      setResult(text);
    } else {
      setResult(result + text);
    }
  };

  return (
    <Container>
      <HistoryButton title="History Icon" />

      <ResultView>
        <Text style={styles.previousText}>{prevValue}</Text>

        <Text style={styles.resultText}>{result}</Text>
      </ResultView>

      <ButtonPanelView>
        <ButtonRow>
          <CalcButton
            text={result ? OPERATORS.clear : OPERATORS.allClear}
            onPress={() =>
              onPressHandler(result ? OPERATORS.clear : OPERATORS.allClear)
            }
            color="cyan"
          />
          <CalcButton
            text={OPERATORS.posneg}
            onPress={() => onPressHandler(OPERATORS.posneg)}
            color="cyan"
          />
          <CalcButton
            text={OPERATORS.modulo}
            onPress={() => onPressHandler(OPERATORS.modulo)}
            color="cyan"
          />
          <CalcButton
            text={OPERATORS.div}
            onPress={() => onPressHandler(OPERATORS.div)}
            color="orange"
          />
        </ButtonRow>

        <ButtonRow>
          <CalcButton
            text={NUMBERS.seven}
            onPress={() => displayNumber(NUMBERS.seven)}
          />
          <CalcButton
            text={NUMBERS.eight}
            onPress={() => displayNumber(NUMBERS.eight)}
          />
          <CalcButton
            text={NUMBERS.nine}
            onPress={() => displayNumber(NUMBERS.nine)}
          />
          <CalcButton
            text={OPERATORS.mul}
            onPress={() => onPressHandler(OPERATORS.mul)}
            color="orange"
          />
        </ButtonRow>

        <ButtonRow>
          <CalcButton
            text={NUMBERS.four}
            onPress={() => displayNumber(NUMBERS.four)}
          />
          <CalcButton
            text={NUMBERS.five}
            onPress={() => displayNumber(NUMBERS.five)}
          />
          <CalcButton
            text={NUMBERS.six}
            onPress={() => displayNumber(NUMBERS.six)}
          />
          <CalcButton
            text={OPERATORS.sub}
            onPress={() => onPressHandler(OPERATORS.sub)}
            color="orange"
          />
        </ButtonRow>

        <ButtonRow>
          <CalcButton
            text={NUMBERS.one}
            onPress={() => displayNumber(NUMBERS.one)}
          />
          <CalcButton
            text={NUMBERS.two}
            onPress={() => displayNumber(NUMBERS.two)}
          />
          <CalcButton
            text={NUMBERS.three}
            onPress={() => displayNumber(NUMBERS.three)}
          />
          <CalcButton
            text={OPERATORS.add}
            onPress={() => onPressHandler(OPERATORS.add)}
            color="orange"
          />
        </ButtonRow>

        <ButtonRow>
          <CalcButton
            text={NUMBERS.zero}
            isLarge
            onPress={() => displayNumber(NUMBERS.zero)}
          />
          <CalcButton
            text={OPERATORS.dot}
            onPress={() => onPressHandler(OPERATORS.dot)}
          />
          <CalcButton
            text={OPERATORS.equal}
            onPress={() => onPressHandler(OPERATORS.equal)}
            backgroundColor="orange"
          />
        </ButtonRow>
      </ButtonPanelView>
    </Container>
  );
};

const styles = StyleSheet.create({
  previousText: {
    color: '#DDDDDD',
  },
  resultText: {
    fontSize: 50,
    color: '#FFFFFF',
  },
});

export default CalculatorScreen;
