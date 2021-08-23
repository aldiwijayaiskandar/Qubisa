/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text, TouchableOpacity} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './@redux/store';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from './theme/colors';
import Home from './screens/home/home';
import Login from './screens/login/login';
import SignUp from './screens/signup/signup';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          <StatusBar barStyle={'dark-content'} backgroundColor="white" />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="App"
                component={BottomTab}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  title: 'Masuk',
                  headerTitleAlign: 'center',
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  title: 'Daftar',
                  headerTitleAlign: 'center',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
