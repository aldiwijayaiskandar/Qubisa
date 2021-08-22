import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {Colors} from '../../theme/colors';
import {getArticle, getPopularArticleTopic} from '../../services/apiService';
import {Article, Topic} from '../../models';
import TopicCard from '../../components/topicCard';
import ArticleCard from '../../components/articleCard';

const ArticleSection = () => {
  const [isTopicLoading, setIsTopicLoading] = useState(false);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isArticleLoading, setIsArticleLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticleTopic = async () => {
    try {
      setIsTopicLoading(true);
      const data = await getPopularArticleTopic();
      setTopics(data);
    } catch (err) {
      console.error('Error Fetching Article Topic: ', err);
    } finally {
      setIsTopicLoading(false);
    }
  };

  const fetchArticles = async () => {
    try {
      setIsArticleLoading(true);
      const data = await getArticle();
      setArticles(data);
    } catch (err) {
      console.error('Error Fetching Articles: ', err);
    } finally {
      setIsArticleLoading(false);
    }
  };

  useEffect(() => {
    fetchArticleTopic();
    fetchArticles();
  }, []);

  return (
    <View style={styles.articleWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Artikel</Text>
        <View style={styles.underLine} />
      </View>
      {isTopicLoading ? (
        <View style={styles.topicLoading}>
          <ActivityIndicator size="large" color={Colors.red} />
        </View>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={topics}
          keyExtractor={({item, index}) => index}
          renderItem={({item, index}: {item: Topic; index: number}) => {
            return <TopicCard topic={item} key={index} />;
          }}
        />
      )}

      {isArticleLoading ? (
        <View style={styles.articleLoading}></View>
      ) : (
        <View style={styles.articleContentWrapper}>
          {articles.map((item: Article, index: number) => {
            return <ArticleCard article={item} key={index} />;
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  articleWrapper: {
    padding: 10,
  },
  titleWrapper: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
  },
  underLine: {
    height: 5,
    width: 125,
    backgroundColor: Colors.red,
    borderRadius: 2.5,
    marginTop: 5,
    marginBottom: 15,
  },
  topicLoading: {
    height: 30,
    backgroundColor: Colors.grey,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleLoading: {
    marginTop: 20,
    height: 150,
    backgroundColor: Colors.grey,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleContentWrapper: {
    marginTop: 20,
    padding: 2.5,
  },
});

export default ArticleSection;
