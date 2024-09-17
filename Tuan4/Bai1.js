import React from 'react';
import {View, Text, Image, TextInput,
 StyleSheet, TouchableOpacity } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';

 import { useState } from 'react';
 

function loginForm(){
  const [trangThai,capNhatTrangThai] = useState("Forgot your password?");

  
  return(
    <View style={{flex:100, backgroundColor: '#FBCB00'}}>
      <View style={{flex:20,justifyContent: 'center',alignItems:'center'}}>
        <Text style={{fontSize:32, fontWeight:'bold'}}> Login</Text>
      </View>
      <View style={{flex:35, justifyContent:'center', alignItems:"center", width: "100%"
      }}>
        <View style={styles.textInput}>
            <Ionicons name="person" size={30} color="#000" style={styles.icon} />
            <TextInput
                placeholder="Email"
                placeholderTextColor={'black'}
                style={{ marginLeft: 15 }}
            />
        </View>
      </View>
      <View style={{flex:35, justifyContent:'center', alignItems:"center", width: "100%"
      }}>
      <View style={styles.textInput}>
            <Ionicons name="lock-closed" size={30} color="#000" style={styles.icon} />
            <TextInput
                placeholder="Password"
                placeholderTextColor={'black'}
                style={{ marginLeft: 15 }}
            />
        </View>
      </View>
      <View style ={{flex:45, justifyContent: 'center', alignItems:'center'}}>
        <TouchableOpacity
          style={{width:'90%', alignItems:'center',height: '50',justifyContent:'center', backgroundColor:"black",marginTop:'30'}} 

          onPress={() => {
          capNhatTrangThai("Dang Nhap Thanh Cong")}}
        
        >
        <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}
                    >
                        LOGIN
                    </Text>

        </TouchableOpacity>
        <View style={{ flex: 50, alignItems: 'center', fontWeight: 'bold', marginTop: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{trangThai}</Text>

                </View>

      </View>
      
    </View>
  );

}
const styles = StyleSheet.create({
    textInput: {
        flexDirection: 'row',
        width: '90%',
        height: 55,
        backgroundColor: '#f5df84',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f2d455',
        paddingHorizontal: 10,
        marginBottom: 30,
    },
});

export default loginForm;