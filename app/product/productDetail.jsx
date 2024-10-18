import { useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { products } from '../../constants/productList';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

const ProductDetail = () => {
  const route = useRoute();
  const { productId } = route.params || {};

  const product = products.find(item => item.id === productId);

  useEffect(() => {
    console.log('Product ID:', productId);
  }, [productId]);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
      headerBackTitle: 'Back',
      headerTintColor: '#dc143c',
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Image source={product.image} style={styles.productImage} />
        <View>
          <Text style={styles.detailTitle}>Detail Produk</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Button Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('product/chat')}>
          <Text style={styles.buttonText}><Ionicons name="chatbox-ellipses-outline" size={30} color="black" /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton} onPress={() => console.log('Buying product')}>
          <Text style={styles.buttonText}><AntDesign name="shoppingcart" size={30} color="white" /></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    paddingTop: 80,
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:Colors.WHITE,
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: Colors.WHITE,
    marginTop: 10,
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 250,
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
    color: Colors.WHITE,
    marginTop: 10,
    lineHeight: 24,
  },
  detailTitle: {
    fontFamily: 'outfit-bold',
    color:Colors.WHITE,
    fontSize: 18,
    marginTop: 30,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatButton: {
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width:'25%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buyButton: {
    backgroundColor: '#dc143c',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    transform: [{ scale: 1 }],
    transition: 'transform 0.1s ease-in-out',
  },
  buttonIcon: {
    marginBottom: 5,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default ProductDetail;
