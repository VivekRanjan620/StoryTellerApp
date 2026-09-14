import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import stories from "../../data/stories";

const RecommendedStory = () => {
  // Recommended story select kar rahe hain
  const recommendedStory = stories.find(
    (story) => story.id === 4
  );

  return (
    <View>
      <Text style={styles.sectionTitle}>
        Recommended For You
      </Text>

      <TouchableOpacity style={styles.recommendedCard}>
        {/* Story Image */}
        <View style={styles.recommendedImage}>
          <Text style={styles.imageText}>
            {recommendedStory.icon}
          </Text>
        </View>

        {/* Story Content */}
        <View style={styles.recommendedContent}>
          <Text style={styles.storyTitle}>
            {recommendedStory.title}
          </Text>

          <Text style={styles.recommendedDescription}>
            A magical journey filled with adventure...
          </Text>

          <Text style={styles.storyCategory}>
            {recommendedStory.category} • {recommendedStory.readTime}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecommendedStory;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#222",
    marginTop: 28,
  },

  recommendedCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 10,
    marginTop: 15,
    marginBottom: 30,
  },

  recommendedImage: {
    width: 100,
    height: 100,
    backgroundColor: "#EDEBFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  imageText: {
    fontSize: 45,
  },

  recommendedContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  storyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },

  recommendedDescription: {
    fontSize: 12,
    color: "#777",
    marginTop: 6,
    lineHeight: 18,
  },

  storyCategory: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
});