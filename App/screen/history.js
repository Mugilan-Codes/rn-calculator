import React from 'react';
import {Button, View, ScrollView} from 'react-native';

import {
  HistoryStatementText,
  HistoryResultText,
  HistoryView,
} from '../styles/main';

const HistoryScreen = ({navigation, route}) => {
  const {history} = route.params;
  return (
    <View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />

      <ScrollView>
        {history &&
          history.map((hist, idx) => (
            <HistoryView key={idx}>
              <HistoryStatementText>{hist.s}</HistoryStatementText>
              <HistoryResultText>{hist.r}</HistoryResultText>
            </HistoryView>
          ))}
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;
