import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import HomeHeader from '../../components/home/HomeHeader';
import SearchBar from '../../components/home/SearchBar';
import FeaturedStory from '../../components/home/FeaturedStory';
import PopularStories from '../../components/home/PopularStories';
import CategorySection from '../../components/home/CategorySection';
import TrendingStories from '../../components/home/TrendingStories';
import RecommendedStory from '../../components/home/RecommendedStory';

const HomeScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <HomeHeader />

      <SearchBar />

      <FeaturedStory />

      <PopularStories />

      <CategorySection />

      <TrendingStories />

      <RecommendedStory />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },

  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
});
