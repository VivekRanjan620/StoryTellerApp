import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StoryCard = ({ title, category, icon, onPress, horizontal = false }) => {
  return (
    <TouchableOpacity
      style={[styles.storyCard, horizontal && styles.horizontalCard]}
      onPress={onPress}
    >
      <View style={styles.storyImage}>
        <Text style={styles.imageText}>{icon}</Text>
      </View>

      <Text style={styles.storyTitle}>{title}</Text>

      <Text style={styles.storyCategory}>{category}</Text>
    </TouchableOpacity>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  storyCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 10,
    marginBottom: 15,
  },

  horizontalCard: {
    width: 160,
    marginRight: 14,
  },

  storyImage: {
    height: 120,
    backgroundColor: '#EDEBFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageText: {
    fontSize: 45,
  },

  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 10,
  },

  storyCategory: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
});
