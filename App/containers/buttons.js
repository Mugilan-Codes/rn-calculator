import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {widowHeight, windowWidth} from '../utils/Dimensions';

const ButtonPanel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.items}>AC</Text>
      <Text style={styles.items}>+/-</Text>
      <Text style={styles.items}>%</Text>
      <Text style={styles.items}>/</Text>
      <Text style={styles.items}>7</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  items: {
    width: windowWidth / 5,
    height: widowHeight / 6,
    backgroundColor: 'red',
    margin: 5,
    textAlign: 'center',
  },
});

export default ButtonPanel;
