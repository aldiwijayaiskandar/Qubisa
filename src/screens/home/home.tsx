import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import SliderSection from './slider';
import MicrolearningSection from './microlearning';
import ArticleSection from './article';

const HomeScreen = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title3}>Masuk</Text>
      </View>
      <SliderSection />
      <MicrolearningSection />
      <ArticleSection />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    height: 55,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  title2: {
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  title3: {
    fontFamily: 'Roboto',
    fontSize: 13,
  },
});

export default HomeScreen;
