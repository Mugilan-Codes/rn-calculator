import React, {useState} from 'react';

import CalcButton from '../components/CalcButton';
import {OPERATORS, NUMBERS} from '../constants';
import {
  Container,
  HistoryButton,
  ResultText,
  ResultView,
  PreviousText,
  ButtonPanelView,
  ButtonRow,
  HistoryStatementText,
  HistoryResultText,
  HistoryView,
} from '../styles/main';

// TODO: Implement History and use all clear to clear it
// TODO: show max of two previous calculations in the calculator screen
// TODO: display '=' when the calculation is done
// TODO: display result with a max length of 10
// TODO: calculate answer even when equal to is not pressed and put the result as prev value
const CalculatorScreen = () => {
  const [history, setHistory] = useState([{s: '23 + 7', r: '30'}]);
  const [statement, setStatement] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('0');

  const onPressHandler = text => {
    switch (text) {
      case OPERATORS.posneg:
        setResult(result * -1);
        return;
      case OPERATORS.clear:
        setResult('0');
        return;
      case OPERATORS.allClear:
        setStatement('');
        setPrevValue('');
        setOperator('');
        setResult('0');
        return;
      case OPERATORS.dot:
        if (result.includes(OPERATORS.dot)) {
          return;
        }
        setResult(result + OPERATORS.dot);
        return;
      case OPERATORS.delete:
        if (result === '0') {
          return;
        }
        if (result.length === 1) {
          setResult('0');
          return;
        }
        setResult(result.substr(0, result.length - 1));
        return;
      case OPERATORS.equal:
        let ans;
        setStatement(`${prevValue} ${operator} ${result}`);
        switch (operator) {
          case OPERATORS.add:
            ans = parseFloat(prevValue) + parseFloat(result);
            setPrevValue('');
            setOperator('');
            setResult(ans);
            return;
          case OPERATORS.sub:
            ans = parseFloat(prevValue) - parseFloat(result);
            setPrevValue('');
            setOperator('');
            setResult(ans);
            return;
          case OPERATORS.mul:
            ans = parseFloat(prevValue) * parseFloat(result);
            setPrevValue('');
            setOperator('');
            setResult(ans);
            return;
          case OPERATORS.div:
            // TODO: Handle divide by zero
            ans = parseFloat(prevValue) / parseFloat(result);
            console.log(ans);
            setPrevValue('');
            setOperator('');
            setResult(ans);
            return;
        }
        return;
    }
  };

  const displayNumber = text => {
    if (result.length > 10) {
      return;
    }

    // if (statement) {
    //   setHistory([...history, {s: statement, r: result}]);
    // }

    if (result === '0') {
      setResult(text);
    } else {
      setResult(result + text);
    }
  };

  const onPressOperator = op => {
    setStatement('');
    setPrevValue(result);
    setOperator(op);
    setResult('0');
  };

  const displayPreviousCalculation = () => {
    if (statement) {
      return statement;
    }
    return `${prevValue} ${operator}`;
  };

  return (
    <Container>
      <HistoryButton title="History Icon" />

      <ResultView>
        <HistoryView>
          {history &&
            history.slice(-2).map(hist => (
              <>
                <HistoryStatementText>{hist.s}</HistoryStatementText>
                <HistoryResultText>{hist.r}</HistoryResultText>
              </>
            ))}
        </HistoryView>

        <PreviousText>{displayPreviousCalculation()}</PreviousText>

        <ResultText>{result}</ResultText>
      </ResultView>

      <ButtonPanelView>
        <ButtonRow>
          <CalcButton
            text={
              result && result !== '0' ? OPERATORS.clear : OPERATORS.allClear
            }
            onPress={() =>
              onPressHandler(
                result && result !== '0' ? OPERATORS.clear : OPERATORS.allClear,
              )
            }
            color="cyan"
          />
          <CalcButton
            text={OPERATORS.delete}
            onPress={() => onPressHandler(OPERATORS.delete)}
            color="cyan"
          />
          <CalcButton
            text={OPERATORS.posneg}
            onPress={() => onPressHandler(OPERATORS.posneg)}
            color="cyan"
          />
          <CalcButton
            text={OPERATORS.div}
            onPress={() => onPressOperator(OPERATORS.div)}
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
            onPress={() => onPressOperator(OPERATORS.mul)}
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
            onPress={() => onPressOperator(OPERATORS.sub)}
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
            onPress={() => onPressOperator(OPERATORS.add)}
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

export default CalculatorScreen;
