import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

function Screen06() {
    return (
        <View style={{ flex: 100, backgroundColor: '#cbf2e6' }}>
            <View
                style={{
                    flex: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>REGISTER</Text>
            </View>
            <View
                style={{
                    flex: 55,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <View style={styles.textInput}>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor={'black'}
                        keyboardType='text'
                    />
                </View>
                <View style={styles.textInput}>
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor={'black'}
                        keyboardType='text'
                    />
                </View>
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
                <View style={styles.textInput}>
                    <TextInput
                        placeholder="Birthday"
                        placeholderTextColor={'black'}
                        keyboardType='text'
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContentL: 'flex-start', width: '100%', }}>
                    <View style={{ flexDirection: 'row', marginRight: 30, marginLeft: 30 }}>
                        <Checkbox
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 10,
                                marginRight: 8,
                            }}
                        />
                        <Text>Male</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginRight: 60, color: 'black' }}>
                        <Checkbox
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 10,
                                marginRight: 8,
                            }}
                        />
                        <Text>Female</Text>
                    </View>
                </View>


            </View>
            <View style={{ flex: 25, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{
                        width: '90%',
                        alignItems: 'center',
                        height: 40,
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
                        REGISTER
                    </Text>
                </TouchableOpacity>
                <View style={{ flex: 50, alignItems: 'center', fontWeight: 'bold', marginTop: 15 }}>
                    <Text>When you agree to terms and conditions</Text>

                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        flexDirection: 'row',
        width: '90%',
        height: 45,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 30,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',

    },
});

export default Screen06;