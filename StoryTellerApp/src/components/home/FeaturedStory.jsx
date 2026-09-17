import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import stories from "../../data/stories";

const FeaturedStory = () => {
  const navigation = useNavigation();

  const featuredStory = stories.find(
    (story) => story.id === 3
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>FEATURED STORY</Text>

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.card}
        onPress={() =>
          navigation.navigate("StoryDetails", {
            story: featuredStory,
          })
        }
      >
        <View style={styles.imageContainer}>
          <Text style={styles.icon}>
            {featuredStory.icon}
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {featuredStory.category}
            </Text>
          </View>

          <Text style={styles.title}>
            {featuredStory.title}
          </Text>

          <Text style={styles.description}>
            {featuredStory.description}
          </Text>

          <View style={styles.bottomRow}>
            <Text style={styles.readTime}>
              ⏱ {featuredStory.readTime}
            </Text>

            <Text style={styles.readNow}>
              Read Now →
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FeaturedStory;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },

  label: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#777",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#6C63FF",
    borderRadius: 20,
    padding: 14,
    flexDirection: "row",
    minHeight: 170,
  },

  imageContainer: {
    width: 115,
    borderRadius: 16,
    backgroundColor: "#EDEBFF",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 58,
  },

  content: {
    flex: 1,
    marginLeft: 14,
    paddingVertical: 3,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 9,
  },

  description: {
    color: "#EDEBFF",
    fontSize: 12,
    lineHeight: 17,
    marginTop: 6,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },

  readTime: {
    color: "#EDEBFF",
    fontSize: 11,
  },

  readNow: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
});