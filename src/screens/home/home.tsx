import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../theme/colors';
import SliderSection from './slider';
import MicrolearningSection from './microlearning';
import ArticleSection from './article';

interface IHomeScreen {
  navigation: any;
}

const HomeScreen = ({navigation}: IHomeScreen) => {
  return (
    <ScrollView>
      <SliderSection />
      <MicrolearningSection />
      <ArticleSection navigation={navigation} />
    </ScrollView>
  );
};

export default HomeScreen;
