import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/home/HomeScreen";
import StoryListScreen from "../screens/story/StoryListScreen";
import CategoryScreen from "../screens/category/CategoryScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import StoryDetailsScreen from "../screens/story/StoryDetailsScreen";
import CategoryStoriesScreen from "../screens/category/CategoryStoriesScreen";
import SearchResultsScreen from "../screens/story/SearchResultsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// Bottom Tab Navigation
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "StoryTeller",
        }}
      />

      <Tab.Screen
        name="Stories"
        component={StoryListScreen}
      />

      <Tab.Screen
        name="Categories"
        component={CategoryScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};


// Main Stack Navigation
const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
      />

      <Stack.Screen
        name="StoryDetails"
        component={StoryDetailsScreen}
      />

      <Stack.Screen
        name="CategoryStories"
        component={CategoryStoriesScreen}
      />
      
      <Stack.Screen
        name="SearchResults"
        component={SearchResultsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;