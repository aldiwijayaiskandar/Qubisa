import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home/home';
import SearchScreen from './screens/search/search';
import LainnyaScreen from './screens/lainnya/lainnya';
import {Colors} from './theme/colors';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route, navigation}) => ({
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Image
                    source={require('./images/home-active.png')}
                    style={styles.tabBarIcon}
                  />
                ) : (
                  <Image
                    source={require('./images/home.png')}
                    style={styles.tabBarIcon}
                  />
                )}
              </>
            );
          },
          tabBarActiveTintColor: Colors.red,
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 15,
              }}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 13,
                }}>
                Masuk
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={({route, navigation}) => ({
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Image
                    source={require('./images/search-active.png')}
                    style={styles.tabBarIcon}
                  />
                ) : (
                  <Image
                    source={require('./images/search.png')}
                    style={styles.tabBarIcon}
                  />
                )}
              </>
            );
          },
          tabBarActiveTintColor: Colors.red,
        })}
      />
      <Tab.Screen
        name="Lainnya"
        component={LainnyaScreen}
        options={({route, navigation}) => ({
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Image
                    source={require('./images/lain-active.png')}
                    style={styles.tabBarIcon}
                  />
                ) : (
                  <Image
                    source={require('./images/lain.png')}
                    style={styles.tabBarIcon}
                  />
                )}
              </>
            );
          },
          tabBarActiveTintColor: Colors.red,
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});

export default BottomTab;
