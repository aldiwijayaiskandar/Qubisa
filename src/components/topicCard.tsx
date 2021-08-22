import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Topic} from '../models';

interface ITopicCard {
  topic: Topic;
}

const TopicCard = ({topic}: ITopicCard) => {
  return (
    <View style={styles.topicWrapper}>
      <Text>{topic.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topicWrapper: {
    paddingVertical: 2,
    borderRadius: 2,
    borderColor: '#DCDCDC',
    borderWidth: 1,
  },
});

export default TopicCard;
