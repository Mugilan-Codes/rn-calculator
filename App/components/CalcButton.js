import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const CalcButton = ({text}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderColor: 'red',
    borderWidth: 2,
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 2,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default CalcButton;
