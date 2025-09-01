import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/50/search--v1.png' }}
        style={styles.icon}
      />
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
});

export default SearchBar;
