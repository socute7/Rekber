import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors';

export default function SignIn() {
    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

  return (
    <View style={{
        padding:25,
        backgroundColor:Colors.BACK,
        paddingTop:80,
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        color:Colors.WHITE
      }}>Let's Sign You In</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:29,
        color:Colors.GRAY,
        marginTop:20
      }}>Welcome Back</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:29,
        color:Colors.GRAY
      }}>You've been missed!</Text>

      <View style={{
        marginTop:50
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
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.GRAY,
        fontFamily:'outfit'
    }
});