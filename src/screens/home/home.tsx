import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../theme/colors';
import SliderSection from './slider';
import MicrolearningSection from './microlearning';
import ArticleSection from './article';

const HomeScreen = () => {
  return (
    <ScrollView>
      <SliderSection />
      <MicrolearningSection />
      <ArticleSection />
    </ScrollView>
  );
};

export default HomeScreen;
