import React, { useState } from "react";
import {
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
    <TextInput
      style={styles.search}
      placeholder="Search stories..."
      placeholderTextColor="#888"
      value={searchText}
      onChangeText={setSearchText}
      onSubmitEditing={handleSearch}
      returnKeyType="search"
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginTop: 20,
    fontSize: 15,
  },
});