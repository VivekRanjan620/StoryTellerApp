import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hello 👋</Text>
        <Text style={styles.title}>StoryTeller</Text>
      </View>

      <TouchableOpacity style={styles.notification}>
        <Text style={styles.notificationText}>🔔</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 14,
    color: '#777',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 3,
  },

  notification: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationText: {
    fontSize: 18,
  },
});
