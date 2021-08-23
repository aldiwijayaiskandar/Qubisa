import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

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
    backgroundColor: Colors.white,
  },
});

export default LainnyaScreen;
