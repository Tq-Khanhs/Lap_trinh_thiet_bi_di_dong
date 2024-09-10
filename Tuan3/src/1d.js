import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, } from 'react-native';

function Screen05() {
    return (
        <View style={{ flex: 100, backgroundColor: '#cbf2e6' }}>
            <View
                style={{
                    flex: 20,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>LOGIN</Text>
            </View>
            <View
                style={{
                    flex: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <View style={styles.textInput}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'black'}
                        keyboardType='text'
                    />
                </View>

                <View style={styles.textInput}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'black'}
                        keyboardType='text'

                    />
                    <Image source={require('../../assets/eye.png')} />
                </View>

                <TouchableOpacity
                    style={{
                        width: '90%',
                        alignItems: 'center',
                        height: 45,
                        justifyContent: 'center',
                        backgroundColor: '#E53935',

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
            </View>
            <View style={{ flex: 40 }}>
                <View style={{ flex: 50, alignItems: 'center' }}>
                    <Text>When you agree to terms and conditions</Text>
                    <Text style={{ color: 'blue', marginVertical: 15 }}>
                        For got your password?
                    </Text>
                    <Text>Or login with</Text>
                </View>
                <View
                    style={{
                        flex: 50,
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            width: 110,
                            height: 45,
                            backgroundColor: '#25479B',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,

                        }}
                    >
                        <Image source={require('../../assets/facebook.png')} />
                    </View>
                    <View
                        style={{
                            width: 110,
                            height: 45,
                            backgroundColor: '#0F8EE0',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,

                        }}
                    >
                        <Image source={require('../../assets/zalo.jpg')} />
                    </View>
                    <View
                        style={{
                            width: 110,
                            height: 45,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: 'blue',
                        }}
                    >
                        <Image source={require('../../assets/google.png')} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        flexDirection: 'row',
        width: '90%',
        height: 54,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 30,
    },
});

export default Screen05;