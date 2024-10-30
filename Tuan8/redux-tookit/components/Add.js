import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useDispatch } from 'react-redux';


export default function AdderScreen({navigation}) {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleAddTask = () => {  
    if (inputValue.trim()) {
      dispatch(addTask(inputValue));  
      setInputValue('');
    } else {
      alert('Please enter a task');
    }
  };
 

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/avatar.png')}
          style={styles.avatar}
        />
        
        <View>
          <Text style={styles.greeting}>Hi Twinkle</Text>
          <Text style={styles.subGreeting}>Have a great day ahead</Text>
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate('Task')}>
        <ArrowLeft color='black' size={24} style={styles.ArrowLeft} />
        </TouchableOpacity>
        
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>ADD YOUR JOB</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Input your job"
            placeholderTextColor="#999"
            value={inputValue}
            onChangeText={handleInputChange}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>FINISH →</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/Image 95.png')}
        style={styles.illustration}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginTop:30
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:50
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: '#5DD5C4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  illustration: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    marginLeft: '20px'
  },
  ArrowLeft:{
    marginLeft: 160
  }
});