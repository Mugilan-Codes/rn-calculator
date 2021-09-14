import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CalcButton = ({
  text,
  color = '#ffffff',
  backgroundColor = '#14141D',
  style = {},
}) => {
  return (
    <TouchableOpacity style={[styles.btnContainer, {backgroundColor}, style]}>
      <Text style={[styles.text, {color}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 2,
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default CalcButton;
