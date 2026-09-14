import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import StoryCard from '../../components/story/StoryCard';
import stories from '../../data/stories';

const CategoryStoriesScreen = ({ route, navigation }) => {
  const { category } = route.params;

  const filteredStories = stories.filter(story => story.category === category);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{category}</Text>

      <Text style={styles.subtitle}>Stories from this category</Text>

      <View style={styles.storyContainer}>
        {filteredStories.map(story => (
          <StoryCard
            key={story.id}
            title={story.title}
            category={story.category}
            icon={story.icon}
            onPress={() =>
              navigation.navigate('StoryDetails', {
                story: story,
              })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoryStoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 20,
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 6,
    marginBottom: 25,
  },

  storyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
