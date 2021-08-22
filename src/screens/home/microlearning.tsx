import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import MicrolearningCard from '../../components/microlearningCard';
import {Content} from '../../models';
import {getMicrolearning} from '../../services/apiService';

import {Colors} from '../../theme/colors';

const MicrolearningSection = () => {
  const [isLoading, setIsloading] = useState(false);
  const [microlearnings, setMicrolearnings] = useState<Content[]>([]);

  const fetchMicrolearning = async () => {
    try {
      setIsloading(true);
      const data = await getMicrolearning();
      setMicrolearnings(data);
    } catch (err) {
      console.error('Error: ', err);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchMicrolearning();
  }, []);

  return (
    <View style={styles.microlearningWrapper}>
      <Text style={styles.title}>Microlearning</Text>
      {isLoading ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color={Colors.red} />
        </View>
      ) : (
        <FlatList
          horizontal
          keyExtractor={({item, index}) => index}
          data={microlearnings}
          renderItem={({item, index}) => {
            return <MicrolearningCard microlearning={item} />;
          }}
        />
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
