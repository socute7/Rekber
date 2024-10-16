import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search..."
      placeholderTextColor="gray"
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 25,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default SearchBar;
