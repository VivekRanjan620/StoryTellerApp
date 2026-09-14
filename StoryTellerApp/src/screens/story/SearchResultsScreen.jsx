import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

import StoryCard from "../../components/story/StoryCard";
import stories from "../../data/stories";

const SearchResultsScreen = ({ route, navigation }) => {
  const { searchText } = route.params;

  const filteredStories = stories.filter((story) =>
    story.title
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        Search Results
      </Text>

      <Text style={styles.searchText}>
        Results for "{searchText}"
      </Text>

      {filteredStories.length > 0 ? (
        <View style={styles.storyContainer}>
          {filteredStories.map((story) => (
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
      ) : (
        <Text style={styles.noResult}>
          No stories found.
        </Text>
      )}
    </ScrollView>
  );
};

export default SearchResultsScreen;

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

  searchText: {
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

  noResult: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 50,
  },
});