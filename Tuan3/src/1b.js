
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
function Sreens03() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#ffffff', '#2e85db']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1 }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }} >
                    <Image source={require('../../assets/lock.png')} style={{
                        width: 180, height: 180

                    }} />

                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

                    <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', marginBottom: 20, marginTop: 120 }}>

                        FORGET {'\n'}
                        PASSWORD
                    </Text>


                    <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 10, marginBottom: 30 }} >
                        Provide your account’s email for which you{'\n'} want to reset your password
                    </Text>


                </View>


                <View
                    style={{
                        flex: 1,

                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                    <View style={styles.inputContainer}>


                        <Ionicons name="mail" size={30} color="#000" style={styles.icon} />
                        <TextInput
                            placeholder='Email'
                            style={styles.input} />
                    </View>
                    <TouchableOpacity
                        style={{
                            width: '82%',
                            backgroundColor: '#DAA520',
                            padding: 15,

                            alignItems: 'center',
                            marginBottom: 20,
                        }}
                        onPress={() => alert('Button pressed!')}>
                        <Text style={{ color: '', fontSize: 20, fontWeight: 'bold' }}>
                            NEXT
                        </Text>
                    </TouchableOpacity>
                </View>


            </LinearGradient>

        </View >


    );
};

export default Sreens03;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 204, 249, 1)'

    }, inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        backgroundColor: 'gray',
        width: '80%',
    },
    input: {
        flex: 1,
        height: 55,
        paddingLeft: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 10,
        marginLeft: 5
    },

});