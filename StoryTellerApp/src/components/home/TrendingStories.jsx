import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import stories from '../../data/stories';

const TrendingStories = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Trending Now</Text>
          <Text style={styles.subtitle}>Stories everyone is reading</Text>
        </View>

        <Text style={styles.fire}>🔥</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((story, index) => (
          <TouchableOpacity
            key={story.id}
            activeOpacity={0.85}
            style={styles.card}
            onPress={() =>
              navigation.navigate('StoryDetails', {
                story,
              })
            }
          >
            <View style={styles.rank}>
              <Text style={styles.rankText}>#{index + 1}</Text>
            </View>

            <Text style={styles.icon}>{story.icon}</Text>

            <Text style={styles.storyTitle} numberOfLines={2}>
              {story.title}
            </Text>

            <Text style={styles.category}>{story.category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TrendingStories;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 14,
  },

  title: {
    fontSize: 19,
    fontWeight: '700',
    color: '#222',
  },

  subtitle: {
    fontSize: 11,
    color: '#888',
    marginTop: 3,
  },

  fire: {
    fontSize: 22,
  },

  card: {
    width: 145,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 13,
    marginRight: 12,
  },

  rank: {
    alignSelf: 'flex-start',
    backgroundColor: '#F0EEFF',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 8,
  },

  rankText: {
    color: '#6C63FF',
    fontSize: 10,
    fontWeight: '700',
  },

  icon: {
    fontSize: 42,
    marginTop: 10,
  },

  storyTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222',
    marginTop: 8,
    lineHeight: 19,
  },

  category: {
    fontSize: 10,
    color: '#888',
    marginTop: 5,
  },
});
