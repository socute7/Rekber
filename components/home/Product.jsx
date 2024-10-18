import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { products } from '../../constants/productList';
import { Colors } from '@/constants/Colors';

const Product = ({ selectedCategory }) => {
  const navigation = useNavigation();
  const filteredProducts = selectedCategory === 'All Categories' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>Products</Text>
      <ScrollView 
        contentContainerStyle={styles.productInnerContainer} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.productGrid}>
          {filteredProducts.map(product => (
            <TouchableOpacity 
              key={product.id} 
              style={styles.productCard}
              onPress={() => {
                console.log('Navigating to Product Detail with ID:', product.id);
                navigation.navigate('product/productDetail', { productId: product.id });
              }}          
            >
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 10,
    flex: 1,
  },
  productTitle: {
    fontFamily: 'outfit-bold',
    color: Colors.WHITE,
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
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    padding: 5,
    marginBottom: 15,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
    marginBottom: 2,
  },
  productPrice: {
    color: '#888',
    fontSize: 12,
  },
});

export default Product;
