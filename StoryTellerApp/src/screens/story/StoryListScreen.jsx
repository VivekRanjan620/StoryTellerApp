import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

import StoryCard from "../../components/story/StoryCard";
import stories from "../../data/stories";

const StoryListScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        All Stories
      </Text>

      <Text style={styles.subtitle}>
        Explore all our stories
      </Text>

      <View style={styles.storyContainer}>
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            title={story.title}
            category={story.category}
            icon={story.icon}
            onPress={() =>
              navigation.navigate("StoryDetails", {
                story: story,
              })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default StoryListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 6,
    marginBottom: 25,
  },

  storyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});