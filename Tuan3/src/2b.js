import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
function Screen08() {
    return (
        <View style={{ flex: 100, }}>
            <View
                style={{
                    flex: 20,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}
            >
                <Image source={require('../../assets/theeye.png')} tyle={{
                    width: 180, height: 180,

                }} />
            </View>
            <View
                style={{
                    flex: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',

                }}
            >

                <View style={styles.textInput}>
                    <Ionicons name="person-outline" size={30} color="blue" style={styles.icon} />
                    <TextInput
                        placeholder="Please input user name"

                        keyboardType='text'
                        style={{ marginLeft: 15, fontSize: 20 }}
                    />
                </View>


                <View style={styles.textInput}>
                    <Ionicons name="lock-closed-outline" size={30} color="blue" style={styles.icon} />
                    <TextInput
                        placeholder="Please input password"

                        keyboardType='text'
                        style={{ marginLeft: 15, fontSize: 20 }}

                    />
                </View>





            </View>
            <View style={{ flex: 50, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ flex: 50, alignItems: 'center', width: '100%', }}>
                    <TouchableOpacity
                        style={{

                            width: '85%',
                            alignItems: 'center',
                            height: 55,
                            justifyContent: 'center',
                            backgroundColor: '#3284db',
                            borderRadius: 10,
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
                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '85%' }}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Register</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={{
                    flex: 50, alignItems: 'center', fontWeight: 'bold', marginTop: 15, width: '100%'
                }}>
                    <View style={styles.box}>
                        <View style={styles.line} />
                        <Text style={styles.text}>Other Login Methods</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={{ flex: 90, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '85%', marginTop: 20 }}>


                        <Image source={require('../../assets/userplus.png')} style={{ width: 80, height: 80 }} />
                        <Image source={require('../../assets/wifii.png')} style={{ width: 80, height: 80 }} />
                        <View style={{ backgroundColor: 'blue', width: 80, height: 80, borderRadius: 10 }}>
                            <Image source={require('../../assets/facebook.png')} style={{ width: 60, height: 60, marginTop: 10, }} />
                        </View>
                    </View>
                </View>


            </View >
        </View >
    );
}

const styles = StyleSheet.create({
    textInput: {
        flexDirection: 'row',
        width: '85%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,

        marginBottom: 30,
    },
    icon: {
        marginRight: 10,

    },
    box: {
        flex: 20,

        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        alignItems: 'flex-start'
    },
    line: {
        flex: 1,
        height: 1,
        marginTop: 10,
        backgroundColor: '#D3D3D3',
        marginHorizontal: 10,
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
});

export default Screen08;