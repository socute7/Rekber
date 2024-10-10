import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Login() {

    const router=useRouter();

  return (
    <View>
      <Image source={require('./../assets/images/login.jpg')}
      style={{
        width:'100%',
        height:480
      }}
      />
      <View style={styles.container}>
        <Text style={{
            fontSize:28,
            fontFamily:'outfit-bold',
            textAlign:'center',
            marginTop:10
        }}>Apps Rekening Bersama</Text>

        <Text style={{
            fontSize:17,
            marginTop:10,
            textAlign:'center',
            color:Colors.GRAY,
        }}>Rekber adalah layanan keuangan yang berfungsi sebagai perantara dalam transaksi online antara penjual dan pembeli. Dalam rekber, dana dari pembeli akan disimpan terlebih dahulu di pihak ketiga, yaitu rekber, sebelum dikirim ke penjual.</Text>

        <TouchableOpacity style={styles.button}
        onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{color:Colors.WHITE, 
                textAlign:'center', 
                fontFamily:'outfit',
                fontSize:17
                }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        height:'100%',
        padding:25
    },
    button:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginTop:'20%'
    }

});