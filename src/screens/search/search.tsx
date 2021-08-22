import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.searchWrapper}>
      <Text>Search</Text>
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

export default SearchScreen;
