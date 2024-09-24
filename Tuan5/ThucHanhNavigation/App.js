import * as React from 'react';
import { Button, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ route, navigation }) {
    const imageUrl = route.params?.imageUrl || require('./assets/vs_blue.png');

    return (
        <View style={{ flex: 100 }}>
            <View style={{ flex: 70, alignItems: 'center', paddingBottom: 300 ,marginTop:10}}>
                {imageUrl && (
                    <Image source={imageUrl} style={{ width: 250, height: 300 }} />
                )}
                <Text style={{fontSize: 20}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:-100, padding: 28, flex: 15 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image source={require("./assets/star.png")} style={{height:30, width:30}}/>
                    <Image source={require("./assets/star.png")} style={{height:30, width:30}}/>
                    <Image source={require("./assets/star.png")} style={{height:30, width:30}}/>
                    <Image source={require("./assets/star.png")} style={{height:30, width:30}}/>
                </View>
                <View>
                    <Text style={{fontSize:17}}>(Xem 828 đánh giá)</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', paddingTop: 10, flex: 15, marginLeft: -5 }}>
                <View >
                    <Text style={{ fontWeight: 'bold', fontSize: 20 , marginLeft:18}}>1.790.000 đ</Text>
                </View>
                <View>
                    <Text style={{ textDecorationLine: 'line-through',marginRight:20 }}>1.790.000 đ</Text>
                </View>
            </View>

            <View style={{ padding: 30, paddingTop: -100, flex: 15 }}>
                <Text style={{ color: 'red', fontSize: 19, fontWeight: 'bold' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Pressable
                    style={{ flexDirection: 'row', alignItems: 'center', width: 280, height: 40, borderWidth: 1, borderRadius: 15, justifyContent: 'center' }}
                    onPress={() => navigation.navigate('Details')}>
                    <Text>4 MÀU - CHỌN MÀU</Text>
                    <Image source={require("./assets/Vector.png")} style={{ justifyContent: 'flex-end' }} />
                </Pressable>
            </View>

            <View style={{ alignItems: 'center', paddingTop: 30 }}>
                <Pressable style={{ backgroundColor: 'red', flexDirection: 'row', alignItems: 'center', width: 280, height: 50, borderRadius: 15, justifyContent: 'center' }}>
                    <Text>CHỌN MUA</Text>
                </Pressable>
            </View>
        </View>
    );
}


function DetailsScreen({navigation}) {
    return (
        <View style={{ flex: 100 }}>
            <View style={{ flex: 20, flexDirection: 'row' }}>
                <Image source={require('./assets/vs_blue.png')} style={{ width: 80, height: 100 }} />
                <View style={{ paddingLeft: 40 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Điện Thoại Vsmart Joy 3</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Hàng chính hãng</Text>
                </View>
            </View>
            <View style={{ flex: 80, backgroundColor: "#C4C4C4" }}>
                <View>
                    <Text style={{ fontWeight: 30, fontSize: 16 }}>Chọn một màu bên dưới:</Text>
                </View>
                <View style={{ flex: 70, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Pressable
                        style={{ backgroundColor: "#C5F1FB", width: 70, height: 70 }}
                        onPress={() => navigation.navigate('Home', { imageUrl: require('./assets/vs_silver.png') })}
                    />
                    <Pressable
                        style={{ backgroundColor: "red", width: 70, height: 70 }}
                        onPress={() => navigation.navigate('Home', { imageUrl: require('./assets/vs_red.png') })}
                    />
                    <Pressable
                        style={{ backgroundColor: "black", width: 70, height: 70 }}
                        onPress={() => navigation.navigate('Home', { imageUrl: require('./assets/vs_black.png') })}
                    />
                    <Pressable
                        style={{ backgroundColor: "#234896", width: 70, height: 70 }}
                        onPress={() => navigation.navigate('Home', { imageUrl: require('./assets/vs_blue.png') })}
                    />
                </View>
                <View style={{ flex: 10, alignItems: 'center', paddingTop: 10 }}>
                    <Pressable style={{
                        backgroundColor: '#1952E294',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: 280,
                        height: 50,
                        borderRadius: 15,
                        justifyContent: 'center'
                    }}>
                        <Text>Xong</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

