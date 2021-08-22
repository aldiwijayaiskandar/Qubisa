import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, Text} from 'react-native';
import {Colors} from '../theme/colors';

interface IButton {
  label: string;
  onPress: Function;
}

const Button = ({label, onPress}: IButton) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={() => onPress()}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    height: 45,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
});

export default Button;
