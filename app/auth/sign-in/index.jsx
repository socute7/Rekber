import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { BASE_URL } from '../../config/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter your email and password.");
      return;
    }
  
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
  
      console.log("API Response:", data);
  
      if (data.token) { 
        Alert.alert("Success", "Logged in successfully!", [
          { text: "OK", onPress: async () => {
            if (data.token) {
              await AsyncStorage.setItem('userToken', data.token);
              await AsyncStorage.setItem('userId', data.user.id);
            }
            console.log('Login response:', data);            
              router.replace('/home');
            }},
        ]);
      } else {
        Alert.alert("Error", data.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong.");
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image source={require('./../../../assets/images/logo-removebg.png')} style={styles.logo} />

          <Text style={styles.title}>Login</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              placeholderTextColor="gray"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="gray"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister} onPress={() => router.replace('auth/sign-up')}>
            <Text style={styles.buttonTextAlt}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: Colors.BLACK,
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
    marginBottom: 20,
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
    color: 'white',
    fontFamily: 'outfit',
  },
  buttonLogin: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: '15%',
  },
  buttonText: {
    color: Colors.BLACK,
    textAlign: 'center',
    fontFamily: 'outfit',
    fontSize: 17,
  },
  buttonRegister: {
    padding: 15,
    backgroundColor: Colors.BACK,
    borderRadius: 99,
    marginTop: '5%',
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
  buttonTextAlt: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: 'outfit',
    fontSize: 17,
  },
});
