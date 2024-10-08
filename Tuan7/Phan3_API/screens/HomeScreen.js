
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, Touchable } from 'react-native';
import { Mail} from 'lucide-react-native'


const HomeScreen = ({ navigation }) =>{
    return(
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/Image95.png")} style={styles.image}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titlePurple}>
                    MANAGER YOUR
                </Text>
                <Text style={styles.titlePurple}>
                    TASK
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <Mail color="#171A1F" size={20} style={styles.inputIcon}/>
                <TextInput  style={styles.input}
                            placeholder="Enter your email"
                            placeholdertextcolor ='#171A1F'


                />
            </View>
            <TouchableOpacity   style={styles.button}
                                onPress={() => navigation.navigate('Task')}>
                <Text styles={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 250,
        height:250,
        marginBottom:30,
    },
    image:{
        height:'100%',
        width:'100%'
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 30,
        marginBottom: 100
    },
    titlePurple: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#8A2BE2',
        lineHeight: 28,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height:50,
        borderColor: '#171A1F',
        borderWidth:1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20, 
    },
    
    inputIcon:{
        marginRight:10
    },
    button:{
        width: '30%',
        height:50,
        backgroundColor: '#00BDD6',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
      },


});

export default HomeScreen;


