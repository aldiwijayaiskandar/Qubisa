import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

import {Colors} from '../../theme/colors';

const MicrolearningSection = () => {
  const [isLoading, setIsloading] = useState(true);
  return (
    <View style={styles.microlearningWrapper}>
      <Text style={styles.title}>Microlearning</Text>
      {isLoading ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color={Colors.red} />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  microlearningWrapper: {
    padding: 10,
  },
  loadingWrapper: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
    backgroundColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  title: {
    marginBottom: 5,
    fontSize: 16,
    fontFamily: 'Open Sans',
  },
});

export default MicrolearningSection;
