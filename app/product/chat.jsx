import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (text.trim().length > 0) {
      setMessages(prevMessages => [
        ...prevMessages, 
        { id: Date.now().toString(), text, sender: 'user' }
      ]);
      setText('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.receivedMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Massage',
      headerBackTitle: 'Back',
      headerTintColor: '#dc143c',
    });
  }, []);

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type a message..."
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  messagesList: {
    flexGrow: 1,
    padding: 10,
  },
  messageContainer: {
    maxWidth: '70%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    marginTop:120,
  },
  userMessage: {
    backgroundColor: '#dc143c',
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    backgroundColor: '#f0f8ff',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Colors.BLACK,
    borderColor: '#ddd',
    marginBottom:20,
  },
  input: {
    flex: 1,
    backgroundColor: '#333',
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  sendButton: {
    backgroundColor: '#dc143c',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default ChatScreen;
