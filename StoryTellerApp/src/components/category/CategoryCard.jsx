import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CategoryCard = ({ icon, name, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.description}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
  },

  icon: {
    fontSize: 38,
    marginBottom: 12,
  },

  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222",
  },

  description: {
    fontSize: 12,
    color: "#777",
    marginTop: 6,
    lineHeight: 17,
  },
});