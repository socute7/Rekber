import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const categories = [
  { name: 'All Categories', image: require('../../assets/images/categories.png') },
  { name: 'PUBG Mobile', image: require('../../assets/images/pubg.jpg') },
  { name: 'Mobile Legend', image: require('../../assets/images/ml.jpg') },
  { name: 'Solo Leveling', image: require('../../assets/images/solo.jpg') },
  { name: 'Black Clover', image: require('../../assets/images/blackclover.jpg') },
];

const Category = ({ selectedCategory, onSelectCategory }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>Categories</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.categoryScrollView}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategory === category.name && styles.categoryButtonSelected,
            ]}
            onPress={() => onSelectCategory(category.name)}
          >
            <Image source={category.image} style={styles.categoryImage} />
            <View style={styles.categoryOverlay}>
              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginRight: 10,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  categoryButtonSelected: {
    borderWidth: 2,
    borderColor: '#ff9900',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  categoryOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Category;
