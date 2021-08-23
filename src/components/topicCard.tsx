import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {selectTopic} from '../@redux/app/app.reducer';
import {Topic} from '../models';

interface ITopicCard {
  topic: Topic;
  navigation: any;
}

const TopicCard = ({topic, navigation}: ITopicCard) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.topicWrapper}
      onPress={() => {
        dispatch(selectTopic(topic.name));
        navigation.navigate('App', {screen: 'Search'});
      }}>
      <Text>{topic.name}</Text>
    </TouchableOpacity>
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
