
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
function Sreens04() {
    const [inputs, setInputs] = useState(['', '', '', '', '', ''])
    const handleChange = (text, index) => {
        const newInputs = [...inputs]
        newInputs[index] = text
        setInputs(newInputs)
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#ffffff', '#2e85db']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1 }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }} >
                    <Text
                        style={{ fontSize: 65, fontWeight: 'bold' }}>CODE</Text>

                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

                    <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', marginBottom: 20, marginTop: 120 }}>

                        VERIFICATION
                    </Text>


                    <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 10, marginBottom: 30 }} >
                        Enter ontime password sent on{'\n'} ++849092605798
                    </Text>


                </View>


                <View
                    style={{
                        flex: 1,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                        {inputs.map((input, index) => (

                            <TextInput
                                key={index}
                                value={input}
                                style={{ borderWidth: 2, borderColor: '#000', borderStyle: 'solid', padding: 8, width: 55, textAlign: 'center' }}
                                keyboardType='text'
                                onChangeText={(text) => handleChange(text, index)}


                            />

                        ))}


                    </View>
                    <TouchableOpacity
                        style={{
                            width: '82%',
                            backgroundColor: '#DAA520',
                            padding: 15,

                            alignItems: 'center',
                            marginBottom: 50,
                        }}
                        onPress={() => alert(`${inputs}`)}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}  >
                            VERIFY CODE
                        </Text>
                    </TouchableOpacity>
                </View>


            </LinearGradient>

        </View >


    );
};

export default Sreens04;
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