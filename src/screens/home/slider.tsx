import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';

import {screenWt} from '../../common/constants';

import {Slide} from '../../models/slide';

import {getSlide} from '../../services/apiService';
import {Colors} from '../../theme/colors';

const SliderSection = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slides, setSlides] = useState<Slide[]>([]);

  const fetchSlide = async () => {
    try {
      setIsLoading(true);
      const data = await getSlide();

      setSlides(data);
    } catch (err) {
      console.error('Error Fetching Slide: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSlide();
  }, []);

  const handleScroll = (e: any) => {
    const currentIndex = parseInt(e.nativeEvent.contentOffset.x / screenWt);
    if (currentIndex !== slideIndex) {
      setSlideIndex(currentIndex);
    }
  };

  const _renderItem = (item: Slide, index: number) => {
    const {imageURL} = item;

    return (
      <Image
        source={{uri: imageURL.mobile}}
        style={styles.slideImage}
        key={index}
      />
    );
  };

  const _renderPageIndicator = (item: Slide, index: number) => {
    return (
      <View
        style={index === slideIndex ? styles.activeIndicator : styles.indicator}
        key={index}
      />
    );
  };

  return (
    <View style={styles.sliderWrapper}>
      {isLoading ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color={Colors.red} />
        </View>
      ) : (
        <>
          <ScrollView
            pagingEnabled
            horizontal
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}>
            {slides.map((item, index) => _renderItem(item, index))}
          </ScrollView>
          <View style={styles.indicatorWrapper}>
            {slides.map((item, index) => _renderPageIndicator(item, index))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    width: screenWt,
    marginVertical: 10,
  },
  slideImage: {
    width: (screenWt * 95) / 100,
    aspectRatio: 16 / 9,
    borderRadius: 4,
    marginLeft: (screenWt * 2.5) / 100,
    marginRight: (screenWt * 2.5) / 100,
  },
  loadingWrapper: {
    alignSelf: 'center',
    width: (screenWt * 95) / 100,
    aspectRatio: 16 / 9,
    backgroundColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  indicatorWrapper: {
    height: 5,
    width: screenWt,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: Colors.grey,
    marginHorizontal: 2.5,
  },
  activeIndicator: {
    width: 11,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: Colors.red,
    marginHorizontal: 2.5,
  },
});

export default SliderSection;
