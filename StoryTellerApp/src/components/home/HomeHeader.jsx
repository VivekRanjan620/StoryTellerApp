import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>
          Welcome back 👋
        </Text>

        <Text style={styles.title}>
          Discover Stories
        </Text>

        <Text style={styles.subtitle}>
          Find your next favorite story
        </Text>
      </View>

      <TouchableOpacity
        style={styles.notification}
        activeOpacity={0.8}
      >
        <Text style={styles.notificationIcon}>
          🔔
        </Text>

        <View style={styles.dot} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
  },

  greeting: {
    fontSize: 13,
    color: "#777",
  },

  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#202124",
    marginTop: 4,
  },

  subtitle: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },

  notification: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  notificationIcon: {
    fontSize: 19,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#FF5A5F",
    position: "absolute",
    top: 9,
    right: 10,
  },
});