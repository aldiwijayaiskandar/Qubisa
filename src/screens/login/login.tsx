import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../theme/colors';
import * as yup from 'yup';

import Input from '../../components/input';
import Button from '../../components/button';

interface ILogin {
  navigation: any;
}

interface ILoginForm {
  email: string;
  password: string;
}

const Login = ({navigation}: ILogin) => {
  const onLoginPressHandle = (values: ILoginForm) => {
    navigation.pop();
  };
  return (
    <View style={styles.mainWrapper}>
      <Formik
        onSubmit={(values: ILoginForm) => {
          onLoginPressHandle(values);
        }}
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('Silahkan masukan Email dengan format yang sesuai')
            .required('Alamat Email Dibutuhkan'),
          password: yup.string().required('Password Dibutuhkan'),
        })}>
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <>
            <Input
              label="Email/username"
              error={errors.email}
              touched={touched.email}
              errorMessage={'Mohon masukan alamat email yang tepat'}
              value={values.email}
              handleChange={handleChange('email')}
              handleBlur={handleBlur('email')}
            />
            <View style={{marginTop: 12.5}} />
            <Input
              label="Kata Sandi"
              error={errors.password}
              touched={touched.password}
              errorMessage={'Password tidak valid'}
              value={values.password}
              handleChange={handleChange('password')}
              handleBlur={handleBlur('password')}
              isPassword
            />
            <View
              style={{alignItems: 'flex-end', marginTop: 7, marginBottom: 20}}>
              <Text style={styles.lupaKataSandi}>Lupa Kata Sandi?</Text>
            </View>

            <Button label="Masuk" onPress={handleSubmit} />
            <View style={styles.belumPunyaAkunWrapper}>
              <Text style={styles.text}>Belum punya akun ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={[styles.text, styles.errorText]}>Daftar</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  textInput: {
    borderRadius: 4,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    padding: 5,
  },
  lupaKataSandi: {
    color: Colors.red,
    fontSize: 11,
  },
  text: {
    fontSize: 14,
  },
  errorText: {color: Colors.red, marginLeft: 5, fontWeight: 'bold'},
  belumPunyaAkunWrapper: {flexDirection: 'row', marginTop: 12.5},
});

export default Login;
