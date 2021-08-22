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

const SignUp = ({navigation}: ILogin) => {
  const onSignupPress = (values: ILoginForm) => {};
  return (
    <View style={styles.mainWrapper}>
      <Formik
        onSubmit={(values: ILoginForm) => {
          onSignupPress(values);
        }}
        initialValues={{
          name: '',
          email: '',
          password: '',
          password2: '',
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required('Nama Dibutuhkan'),
          email: yup
            .string()
            .email('Format Email tidak sesuai')
            .required('Email Dibutuhkan'),
          password: yup
            .string()
            .required('Password Dibutuhkan')
            .min(8, 'Password minimal terdiri dari 8 karakter')
            .matches(
              /\w*[A-Z]\w*/,
              'Password minimal terdiri dari 1 huruf kapital',
            )
            .matches(/\d/, 'Password minimal terdiri dari 1 angka')
            .matches(
              /[!@#$%^&*()\-_"=+{}; :,<.>]/,
              'Password minimal terdiri dari 1 karakter spesial',
            ),
          password2: yup
            .string()
            .required('Konfirmasi Password Dibutuhkan')
            .oneOf(
              [yup.ref('password')],
              'Konfirmasi Password tidak sesuai dengan Password',
            ),
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
              label="Nama Lengkap"
              error={errors.name}
              touched={touched.name}
              value={values.name}
              handleChange={handleChange('name')}
              handleBlur={handleBlur('name')}
              placeholder={'masukan nama kamu sesuai KTP'}
            />
            <View style={{marginTop: 12.5}} />
            <Input
              label="Email/username"
              error={errors.email}
              touched={touched.email}
              value={values.email}
              handleChange={handleChange('email')}
              handleBlur={handleBlur('email')}
              placeholder={'masukan email/username kamu'}
            />
            <View style={{marginTop: 12.5}} />
            <Input
              label="Kata Sandi"
              error={errors.password}
              touched={touched.password}
              value={values.password}
              handleChange={handleChange('password')}
              handleBlur={handleBlur('password')}
              placeholder={'masukan kata sandi kamu'}
              isPassword
            />
            <View style={{marginTop: 12.5}} />
            <Input
              label="Ulang Kata Sandi"
              error={errors.password2}
              touched={touched.password2}
              value={values.password2}
              handleChange={handleChange('password2')}
              handleBlur={handleBlur('password2')}
              placeholder={'ketik ulang kata sandi kamu'}
              isPassword
            />
            <View style={{marginTop: 30}} />

            <Button label="Daftar" onPress={handleSubmit} />
            <View style={styles.belumPunyaAkunWrapper}>
              <Text style={styles.text}>Sudah punya akun ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={[styles.text, styles.errorText]}>Masuk</Text>
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

export default SignUp;
