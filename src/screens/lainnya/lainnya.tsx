import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LainnyaScreen = () => {
  return (
    <View style={styles.lainnyaWrapper}>
      <Text>Lainnya</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lainnyaWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LainnyaScreen;
