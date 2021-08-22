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
    height: 30,
    paddingVertical: 2,
    borderRadius: 2,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    marginHorizontal: 2.5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default TopicCard;
