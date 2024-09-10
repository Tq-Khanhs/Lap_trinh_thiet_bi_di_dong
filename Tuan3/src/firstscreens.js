
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

function firstscreens() {
    return (
        <View style={styles.container}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }} >
                <Image source={require('../../assets/elip.png')} style={{
                    width: 180, height: 180,
                    paddingBottom: 20
                }} />

            </View>
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 204, 249, 1)', justifyContent: 'center', alignItems: 'center' }} >

                <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', marginBottom: 20, marginTop: 140 }}>
                    GROW {'\n'}
                    YOUR BUSINESS
                </Text>


                <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 10, marginBottom: 30 }} >
                    We will help you to grow your business using {'\n'}
                    online server
                </Text>


            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity style={{
                    width: 160,
                    backgroundColor: '#DAA520',
                    padding: 20,
                    borderRadius: 10,
                    alignItems: 'center',
                }} onPress={() => alert('Login')}>
                    <Text style={{
                        color: '',
                        fontSize: 20, fontWeight: 'bold'
                    }}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 160,
                    backgroundColor: '#DAA520',
                    padding: 20,
                    borderRadius: 10,
                    alignItems: 'center',
                }} onPress={() => alert('Sign up')}>
                    <Text style={{
                        color: '',
                        fontSize: 20, fontWeight: 'bold'
                    }}>SIGN UP</Text>
                </TouchableOpacity>
            </View>


        </View>


    );
};

export default firstscreens;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 204, 249, 1)'

    },

});