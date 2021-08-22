import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Content} from '../models';
import {Colors} from '../theme/colors';

interface IMicrolearningCard {
  microlearning: Content;
}

const MicrolearningCard = ({microlearning}: IMicrolearningCard) => {
  return (
    <>
      <View style={styles.microlearnngCardWrapper}>
        {microlearning.imageURL ? (
          <Image
            source={{uri: microlearning.imageURL}}
            style={styles.thumbnailImage}
          />
        ) : (
          <Image
            source={require('../images/content-image-not-found.png')}
            style={styles.thumbnailImage}
          />
        )}
        <View style={{padding: 10, flex: 1}}>
          <View style={{flexGrow: 1}}>
            <Text style={styles.title}>{microlearning.title}</Text>
          </View>
          {microlearning.isMicrolearning ? (
            <View style={{marginTop: 10}}>
              <Text style={styles.rating}>
                {microlearning.hitRate} menonton . durasi 4 menit
              </Text>
            </View>
          ) : (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../images/star.png')}
                style={{width: 55, height: 24, resizeMode: 'contain'}}
              />
              <Text style={[{marginLeft: 5}, styles.rating]}>
                {microlearning.rating.avgRatingScore} ({microlearning.totalLike}
                )
              </Text>
            </View>
          )}
          <View style={{flexDirection: 'row'}}>
            {microlearning.instructors[0].profilePic ? (
              <Image
                source={{uri: microlearning.instructors[0].profilePic}}
                style={styles.profilePic}
              />
            ) : (
              <View
                style={[
                  {
                    backgroundColor: Colors.grey,
                  },
                  styles.profilePic,
                ]}
              />
            )}
            <View style={{marginLeft: 5, marginBottom: 7.5}}>
              <Text style={styles.rating}>
                {microlearning.instructors[0].name}
              </Text>
              <Text style={styles.instructorType}>
                {microlearning.isMicrolearning ? 'Lembaga' : 'Instruktur'}
              </Text>
            </View>
          </View>
          <View style={{borderWidth: 1, borderColor: '#DCDCDC'}} />
          <View style={{alignItems: 'flex-end', marginTop: 7.5}}>
            <Text style={styles.price}>{microlearning.price.name}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: microlearning.isMicrolearning
            ? '#C0215E'
            : '#2B527A',
          borderRadius: 2,
          padding: 2.5,
          paddingHorizontal: 5,
          top: 100,
          left: 7.5,
        }}>
        {microlearning.isMicrolearning ? (
          <Text style={styles.label}>Microlearning</Text>
        ) : (
          <Text style={styles.label}>Kursus</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  microlearnngCardWrapper: {
    width: 220,
    marginRight: 10,
    borderRadius: 4,
    borderColor: '#DCDCDC',
    borderWidth: 0.5,
  },
  thumbnailImage: {width: '100%', height: 124},
  title: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Nunito',
  },
  profilePic: {height: 22, width: 22, borderRadius: 11},
  instructorType: {
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Nunito',
  },
  price: {
    fontSize: 13,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  label: {color: 'white', fontSize: 11, fontFamily: 'Nunito'},
});

export default MicrolearningCard;
