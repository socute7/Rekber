import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';

const dummyOrders = [
  {
    id: 1,
    name: 'Akun Black Clover',
    image: require('../../assets/images/product/p.bc.jpg'),
    price: 'Rp. 1.000.000',
  },
  {
    id: 2,
    name: 'Akun Mobile Legends',
    image: require('../../assets/images/product/p.ml.jpg'),
    price: 'Rp. 1.000.000',
  },
  {
    id: 3,
    name: 'Akun PUBG Mobile',
    image: require('../../assets/images/product/p.pubg.jpg'),
    price: 'Rp. 1.000.000',
  },
];

export default function Order() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {dummyOrders.map((order) => (
          <View key={order.id} style={styles.orderItem}>
            <Image source={order.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{order.name}</Text>
              <Text style={styles.productPrice}>{order.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#1c1c1e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    marginTop:30,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  orderItem: {
    flexDirection: 'row',
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  productPrice: {
    color: '#888',
    fontSize: 14,
    marginBottom: 5,
  },
  productQuantity: {
    color: '#aaa',
    fontSize: 14,
  },
});
