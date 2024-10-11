import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';

export default function SignIn() {
    const navigation=useNavigation();
    const router=useRouter();

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
      <Image source={require('./../../../assets/images/logo-removebg.png')}
      style={{
        width:'100%',
        height:150
      }}
      />

      <View style={{
        marginTop:50
      }}>
        <View>
          <Text style={{
          color:Colors.WHITE,
          fontSize:25,
          textAlign:'center',
          fontFamily:'outfit-bold',
          marginBottom:20
        }}>Login</Text>
        </View>
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
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={{
          color:Colors.WHITE,
          textAlign:'center',
          fontFamily:'outfit',
          fontSize:17
        }}>Login</Text>
      </TouchableOpacity>
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
    buttonLogin:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'15%'
    },
    buttonRegister:{
      padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:'8%'
    }
});