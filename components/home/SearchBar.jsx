import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <AntDesign name="search1" size={24} color="#dc143c" style={styles.icon} />
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="gray"
        value={searchTerm}
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1, 
    color: '#ffffff',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingLeft: 40,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
});

export default SearchBar;
