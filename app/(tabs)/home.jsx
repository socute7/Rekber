import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../../components/home/SearchBar';
import Category from '../../components/home/Category';
import Product from '../../components/home/Product';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  return (
    <View style={styles.container}>
      <SearchBar />
      <Category selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <Product selectedCategory={selectedCategory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f5f5f5',
  },
});
