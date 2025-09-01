import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryList = ({ categories, onPressCategory }) => {
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.category}
          onPress={() => onPressCategory(item)}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: '#eee',
    margin: 6,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  text: {
    fontSize: 14,
  },
});

export default CategoryList;

