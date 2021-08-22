import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View, TextInput, Image} from 'react-native';
import {Colors} from '../theme/colors';

interface IInput {
  label: string;
  value: string;
  error: any;
  touched: any;
  handleChange: Function;
  handleBlur: Function;
  isPassword?: boolean;
  placeholder: string;
}

const Input = ({
  label,
  value,
  error,
  touched,
  handleBlur,
  handleChange,
  placeholder,
  isPassword = false,
}: IInput) => {
  const [hidePassword, setHidePassword] = useState(isPassword);
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.textInputWrapper,
          {
            borderColor: error ? Colors.red : '#DCDCDC',
          },
        ]}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#A0A0A0CC'}
          onChangeText={value => handleChange(value)}
          onBlur={value => handleBlur(value)}
          secureTextEntry={hidePassword}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.eyeWrapper}>
            <Image source={require('../images/eye.png')} style={styles.eye} />
          </TouchableOpacity>
        )}
      </View>
      {error != null && touched && (
        <Text style={styles.errorLabel}>{error}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  errorLabel: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: Colors.red,
  },
  textInputWrapper: {
    height: 45,
    borderRadius: 4,
    borderWidth: 1,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'black',
  },
  eyeWrapper: {
    height: 45,
    padding: 5,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eye: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
});

export default Input;
