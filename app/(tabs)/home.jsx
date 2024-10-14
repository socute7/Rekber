import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const categories = ['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books'];
const products = [
  { id: 1, name: 'Laptop', price: '$999' },
  { id: 2, name: 'Smartphone', price: '$499' },
  { id: 3, name: 'Headphones', price: '$199' },
  { id: 4, name: 'Sneakers', price: '$89' },
  { id: 5, name: 'Coffee Maker', price: '$49' },
  { id: 6, name: 'Coffee Maker', price: '$49' },
  { id: 7, name: 'Coffee Maker', price: '$49' },
  { id: 8, name: 'Coffee Maker', price: '$49' },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="gray"
      />

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.categoryScrollView}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>Products</Text>
        <ScrollView 
          contentContainerStyle={styles.productInnerContainer} 
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.productGrid}>
            {products.map(product => (
              <View key={product.id} style={styles.productCard}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f5f5f5',
  },
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
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontFamily: 'outfit-bold',
    fontSize: 24,
    marginBottom: 10,
  },
  categoryScrollView: {
    paddingHorizontal: 10,
  },
  categoryButton: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    height: 100,
    width: 100,
    justifyContent: 'center',
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productContainer: {
    marginTop: 10,
    flex: 1,
  },
  productTitle: {
    fontFamily: 'outfit-bold',
    fontSize: 24,
    marginBottom: 10,
  },
  productInnerContainer: {
    paddingBottom: 20,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    height: 120,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productPrice: {
    color: '#888',
  },
});
