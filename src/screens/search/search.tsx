import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

interface ISearchScreen {
  topic: string;
}

const SearchScreen = ({topic}: ISearchScreen) => {
  return (
    <View style={styles.searchWrapper}>
      <Text>Search</Text>
      <Text>{topic}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state: any) => {
  return {
    topic: state.app.selectedTopic,
  };
};

export default connect(mapStateToProps, null)(SearchScreen);
