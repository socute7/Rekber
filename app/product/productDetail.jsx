import { useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { products } from '../../constants/productList';

const ProductDetail = () => {
  const route = useRoute();
  const { productId } = route.params || {};

  // Find product by ID
  const product = products.find(item => item.id === productId);

  useEffect(() => {
    console.log('Product ID:', productId);
  }, [productId]);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    });
  }, []);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      
      <TouchableOpacity style={styles.buyButton} onPress={() => console.log('Buying product')}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginTop:80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: '#FF5722', // Change to an attractive color for the price
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 250, // Increase height for better visibility
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  description: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 24,
  },
  buyButton: {
    backgroundColor: '#FF5722', // Attractive background color for button
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default ProductDetail;
