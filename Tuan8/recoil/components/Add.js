import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useRecoilState } from 'recoil';
import { tasksState } from '../taskState';


export default function AdderScreen({navigation}) {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [inputValue, setInputValue] = useState('');

  const addTask = async () => {
    if (inputValue.trim()) {
      const newTask = { task: inputValue };
      try {
        const response = await fetch('https://67217df698bbb4d93ca8885b.mockapi.io/Task', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTask),
        });
        const data = await response.json();
        setTasks((oldTasks) => [...oldTasks, data]);
        setInputValue('');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    } else {
      alert('Please enter a task');
    }
  };
 
 const handleInputChange = (text) => {
    setInputValue(text); 
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
        <TouchableOpacity style={styles.button} onPress={addTask}>
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