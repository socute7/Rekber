import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../../components/home/SearchBar';
import Category from '../../components/home/Category';
import Product from '../../components/home/Product';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm}/>
      <Category selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <Product selectedCategory={selectedCategory} searchTerm={searchTerm}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#1c1c1e',
  },
});
