import { SafeAreaView, TextInput, TouchableOpacity, View, Image,Text ,StyleSheet,FlatList} from "react-native";
import {ArrowLeft, Edit2, Search, CheckIcon, Plus} from 'lucide-react-native'
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask } from '../actions/taskAction';

const TaskManager = ({navigation}) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task.tasks);

  useEffect(() => {
    dispatch(fetchTasks()); // Lấy danh sách tác vụ khi component load
  }, [dispatch]);

   const TaskItem = ({item}) => (
        <View style={styles.item}>
            <CheckIcon color='green' size={20}/>
            <Text style={styles.taskText}>{item.task}</Text>
            <TouchableOpacity><Edit2 color="red" size={16} /></TouchableOpacity>
            
        </View>
        );
    
    
        return(
        <SafeAreaView style={styles.safeArea} >
            <View style={styles.topArea}>
                <ArrowLeft color="#171A1F" size={20} style={styles.arrowLeft} onPress={() => navigation.goBack()}/>
                <Image source={require('../assets/avatar.png')} style={styles.avatar}/>
                <View style={styles.textContainer}>
                    <Text style={styles.hi}>Hi Twinkle</Text>
                    <Text style={styles.text}>Have agarate a head</Text>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <Search color="#171A1F" size={20} />
                <TextInput  placeholder = "Search"
                            placeholdertextcolor ='171A1F' />
            </View>
            <View>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <TaskItem item={item} />}
                eyExtractor={item => item.id}
                style={styles.flatList}
                
            />

            
            </View>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Add')} >
                <Plus color='#FFFFFF' size={20} />
            </TouchableOpacity>
        </SafeAreaView>

    );

};

const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        backgroundColor: 'white'
    },
    topArea:{
        flex:100,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
        
    },
    arrowLeft:{
        marginRight:130
    }
    ,
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 20,
        marginRight:20,
    },
    hi:{
        fontSize:30
    },
    textContainer:{
        width: '60%',
        marginRight:8
    },
    text:{
        fontSize:16

    },
    searchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        height:40,
        borderWidth:1,
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 8,
        paddingHorizontal: 12,
        marginTop: '50px'
    },
    button:{
        backgroundColor:'#00BDD6',
        width: 80,
        height: 80,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'42%'
        

    },
    item: {
        flexDirection: 'row',      
        alignItems: 'center',            
        justifyContent: 'space-between',   
        backgroundColor: '#f0f0f0',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        width:'80%',
        marginLeft:'9%'
      },
      taskText: {
        marginLeft: 20,                   
        flex: 1,                          
      },
      flatList:{
        height: 300,
        marginTop: 30
      }


});

export default TaskManager;
