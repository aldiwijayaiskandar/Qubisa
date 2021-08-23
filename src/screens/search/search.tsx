import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Colors} from '../../theme/colors';

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
    backgroundColor: Colors.white,
  },
});

const mapStateToProps = (state: any) => {
  return {
    topic: state.app.selectedTopic,
  };
};

export default connect(mapStateToProps, null)(SearchScreen);
