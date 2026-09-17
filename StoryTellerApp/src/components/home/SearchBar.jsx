import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

  const handleSearch = () => {
    const text = searchText.trim();

    if (!text) return;

    navigation.navigate("SearchResults", {
      searchText: text,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Text style={styles.icon}>🔍</Text>

        <TextInput
          style={styles.input}
          placeholder="Search stories, categories..."
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
      </View>

      <View style={styles.filterButton}>
        <Text style={styles.filterIcon}>☰</Text>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  searchBox: {
    flex: 1,
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  icon: {
    fontSize: 17,
    marginRight: 9,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#222",
  },

  filterButton: {
    width: 52,
    height: 52,
    backgroundColor: "#6C63FF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  filterIcon: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});