import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategorySection = () => {
  return (
    <View>
      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        {/* Kids */}
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryIcon}>👦</Text>

          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>

        {/* Moral */}
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryIcon}>💡</Text>

          <Text style={styles.categoryText}>Moral</Text>
        </TouchableOpacity>

        {/* Fantasy */}
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryIcon}>✨</Text>

          <Text style={styles.categoryText}>Fantasy</Text>
        </TouchableOpacity>

        {/* Love */}
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryIcon}>❤️</Text>

          <Text style={styles.categoryText}>Love</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategorySection;

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222',
  },

  seeAll: {
    fontSize: 13,
    color: '#6C63FF',
  },

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  category: {
    width: 75,
    height: 80,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryIcon: {
    fontSize: 25,
  },

  categoryText: {
    fontSize: 12,
    color: '#444',
    marginTop: 5,
  },
});
