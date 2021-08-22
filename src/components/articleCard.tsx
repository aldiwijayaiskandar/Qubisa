import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {screenWt} from '../common/constants';
import {Article} from '../models';

interface IArticleCard {
  article: Article;
}

const ArticleCard = ({article}: IArticleCard) => {
  return (
    <>
      <View style={styles.articleCardWrapper}>
        <Image
          source={{uri: article.imageUrlPreview}}
          style={{
            height: 75,
            width: 75,
            borderRadius: 2,
          }}
        />
        <View style={styles.articleContent}>
          <Text style={styles.articleTitle}>{article.title}</Text>
          <View style={styles.articleCategoryWrapper}>
            <Text
              style={[styles.articleCategory, {color: article.category.color}]}>
              {article.category.name}
            </Text>
            <Text style={{marginHorizontal: 2.5}}>|</Text>
            <Text style={styles.articleCategory}>
              {article.created_date} . {article.timeOfRead} menit membaca
            </Text>
          </View>
          <View style={styles.instructorWrapper}>
            <Image
              source={{uri: article.instructor.profilePic}}
              style={{height: 22, width: 22, borderRadius: 11, marginRight: 5}}
            />
            <Text style={styles.instructorName}>{article.instructor.name}</Text>
          </View>
        </View>
      </View>
      <View
        style={{borderColor: '#DCDCDC', borderWidth: 1, marginBottom: 7.5}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  articleCardWrapper: {
    flexDirection: 'row',
  },
  articleContent: {
    width: screenWt - 115,
    marginLeft: 10,
    paddingRight: 10,
  },
  articleTitle: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 'bold',
  },
  articleCategoryWrapper: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleCategory: {
    fontFamily: 'Nunito',
    fontSize: 12,
  },
  instructorWrapper: {
    marginTop: 5,
    flexDirection: 'row',
    width: screenWt - 135,
    marginBottom: 10,
  },
  instructorName: {
    fontSize: 12,
    fontFamily: 'Nunito',
  },
});

export default ArticleCard;
