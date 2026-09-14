import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import StoryCard from '../story/StoryCard';
import stories from '../../data/stories';

const PopularStories = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Stories</Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.slice(0, 3).map(story => (
          <StoryCard
            key={story.id}
            title={story.title}
            category={story.category}
            icon={story.icon}
            horizontal
            onPress={() =>
              navigation.navigate('StoryDetails', {
                story: story,
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularStories;

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222',
  },

  seeAll: {
    fontSize: 13,
    color: '#6C63FF',
  },
});
