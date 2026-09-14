import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import HomeHeader from '../../components/home/HomeHeader';
import SearchBar from '../../components/home/SearchBar';
import PopularStories from '../../components/home/PopularStories';
import CategorySection from '../../components/home/CategorySection';
import RecommendedStory from '../../components/home/RecommendedStory';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HomeHeader />

      <SearchBar />

      <PopularStories />

      <CategorySection />

      <RecommendedStory />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    paddingHorizontal: 20,
  },
});
