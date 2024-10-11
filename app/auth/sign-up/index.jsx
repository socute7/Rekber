import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function SignUp() {
  const router=useRouter();
  const navigation=useNavigation();

  useEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
},[])
  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={{
      padding:25,
      backgroundColor:Colors.BACK,
      paddingTop:80,
      height:'100%'
  }}>
      <Image source={require('./../../../assets/images/logo-removebg.png')}
      style={{
        width:'100%',
        height:150
      }}
      />
      <View>
          <Text style={{
          color:Colors.WHITE,
          fontSize:25,
          textAlign:'center',
          fontFamily:'outfit-bold',
          marginTop:30
        }}>Register</Text>
        </View>
      <View style={{
        marginTop:50
      }}>
        <Text style={{
            color:Colors.WHITE,
            fontFamily:'outfit',
            marginBottom:10
        }}>User Name</Text>
        <TextInput style={[styles.input, {color:'white'}]} 
        placeholder='Enter User Name'
        placeholderTextColor='gray'/>
      </View>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
            color:Colors.WHITE,
            fontFamily:'outfit',
            marginBottom:10
        }}>Email</Text>
        <TextInput style={[styles.input, {color:'white'}]} 
        placeholder='Enter Email'
        placeholderTextColor='gray'/>
      </View>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
            color:Colors.WHITE,
            fontFamily:'outfit',
            marginBottom:10
        }}>Password</Text>
        <TextInput style={[styles.input, {color:'white'}]}
        secureTextEntry={true} 
        placeholder='Enter Password'
        placeholderTextColor='gray'/>
      </View>
      <TouchableOpacity  
      onPress={()=>router.replace('auth/sign-up')}
      style={styles.buttonRegister}>
        <Text style={{
          color:Colors.PRIMARY,
          textAlign:'center',
          fontFamily:'outfit',
          fontSize:17
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  input:{
      padding:15,
      borderWidth:1,
      borderRadius:15,
      borderColor:Colors.GRAY,
      fontFamily:'outfit'
  },
  buttonRegister:{
    padding:15,
      backgroundColor:Colors.WHITE,
      borderRadius:99,
      marginTop:'15%'
  }
});