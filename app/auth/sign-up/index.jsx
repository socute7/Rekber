import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function SignUp() {
  const router = useRouter();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.3:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Account created successfully!');
        router.replace('auth/sign-in');
      } else {
        Alert.alert('Error', data.error || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Error', 'Failed to register. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            source={require('./../../../assets/images/logo-removebg.png')}
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>Register</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>User Name</Text>
            <TextInput
              style={[styles.input, { color: 'white' }]}
              placeholder="Enter User Name"
              placeholderTextColor="gray"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, { color: 'white' }]}
              placeholder="Enter Email"
              placeholderTextColor="gray"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={[styles.input, { color: 'white' }]}
              secureTextEntry={true}
              placeholder="Enter Password"
              placeholderTextColor="gray"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <TouchableOpacity onPress={handleRegister} style={styles.buttonRegister}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: Colors.BACK,
    paddingTop: 80,
    height: '100%',
  },
  logo: {
    width: '100%',
    height: 150,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'outfit-bold',
    marginTop: 30,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    color: Colors.WHITE,
    fontFamily: 'outfit',
    marginBottom: 10,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: 'outfit',
  },
  buttonRegister: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: '15%',
  },
  buttonText: {
    color: Colors.PRIMARY,
    textAlign: 'center',
    fontFamily: 'outfit',
    fontSize: 17,
  },
});
