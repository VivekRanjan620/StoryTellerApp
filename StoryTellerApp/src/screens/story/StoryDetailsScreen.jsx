import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const StoryDetailsScreen = ({ route, navigation }) => {
  const { story } = route.params;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      {/* Story Icon */}
      <View style={styles.storyImage}>
        <Text style={styles.icon}>{story.icon}</Text>
      </View>

      {/* Story Information */}
      <Text style={styles.category}>
        {story.category}
      </Text>

      <Text style={styles.title}>
        {story.title}
      </Text>

      <Text style={styles.readTime}>
        {story.readTime}
      </Text>

      {/* Description */}
      <Text style={styles.description}>
        {story.description}
      </Text>

      {/* Story Content */}
      <Text style={styles.content}>
        {story.content}
      </Text>
    </ScrollView>
  );
};

export default StoryDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
    padding: 20,
  },

  backButton: {
    marginBottom: 20,
  },

  backText: {
    fontSize: 16,
    color: "#6C63FF",
    fontWeight: "600",
  },

  storyImage: {
    height: 220,
    backgroundColor: "#EDEBFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 90,
  },

  category: {
    fontSize: 14,
    color: "#6C63FF",
    marginTop: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginTop: 8,
  },

  readTime: {
    fontSize: 13,
    color: "#777",
    marginTop: 8,
  },

  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginTop: 25,
  },

  content: {
    fontSize: 16,
    color: "#333",
    lineHeight: 26,
    marginTop: 20,
    marginBottom: 40,
  },
});