import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
function Screen07() {
    return (
        <View style={{ flex: 100, backgroundColor: '#FBCB00' }}>
            <View
                style={{
                    flex: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>LOGIN</Text>
            </View>
            <View
                style={{
                    flex: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >

                <View style={styles.textInput}>
                    <Ionicons name="person" size={30} color="#000" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'black'}
                        keyboardType='text'
                        style={{ marginLeft: 15 }}
                    />
                </View>


                <View style={styles.textInput}>
                    <Ionicons name="lock-closed" size={30} color="#000" style={styles.icon} />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'black'}
                        keyboardType='text'
                        style={{ marginLeft: 15 }}

                    />
                    <Image source={require('../../assets/eye.png')} style={{ marginLeft: 200 }} />
                </View>





            </View>
            <View style={{ flex: 45, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{
                        width: '90%',
                        alignItems: 'center',
                        height: 55,
                        justifyContent: 'center',
                        backgroundColor: '#000',

                        marginTop: 30,
                    }}
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
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>CREATE ACCOUNT</Text>

                </View>


            </View>
        </View >
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

export default Screen07;