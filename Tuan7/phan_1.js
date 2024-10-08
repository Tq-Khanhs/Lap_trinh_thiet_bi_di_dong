import React, {useState, useEffect} from 'react';
import {SafeAreaView,AccessibilityInfo, View, Text, StyleSheet,TextInput,Touchable,FlatList,TouchableOpacity} from 'react-native';


const App = () => {
  const [users,setUser]  = useState([]);

  useEffect(()=>{
    fetch('https://66fc90aec3a184a84d175459.mockapi.io/task/users')
    .then((res)=>{
    return res.json();
    })
    .then((data)=>{
      setUser(data)
    })
    .catch((error) =>{
      console.log("error", Error)
    })
  });



  const addUser = () =>{
    const newUser = {name:"QuocKhanh"}

    fetch('https://66fc90aec3a184a84d175459.mockapi.io/task/users', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser) }).then(() => { 
        
        console.log('new todo added.') });

  }

  const updateUser =() =>{
    const userUpdated = {name:"QuocKhanh IUH"}
    fetch("https://66fc90aec3a184a84d175459.mockapi.io/task/users/" + 10, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userUpdated) })
      .then(() => {
        console.log("updated")
      })
  }

  const deleteUser = () => {
     fetch("https://66fc90aec3a184a84d175459.mockapi.io/task/users/" + 9,{
      method: "DELETE", })
      .then(() => {
        console.log('todo deleted.')});
      };

  type UserProps = {name: string};

  const UserItem = ({name}: UserProps) => (
  <View>
    <Text >{name}</Text>
  </View>
);
  return(
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonText} onPress = {addUser}>
          <Text> Add </Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.buttonText} onPress={updateUser} >
          <Text> Edit </Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.buttonText} onPress={deleteUser} >
          <Text> Remove </Text>
        </TouchableOpacity> 
        <FlatList
        data={users}
        renderItem={({item}) => <UserItem name={item.name} />}
        keyExtractor={item => item.id}
      />


  </View>
  </SafeAreaView>

  );
  
  
}

  
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap:20,
    marginTop:20,
  },
  buttonText:{
    backgroundColor: "red",
    width: "70%",
    height:60,
    textAlign:"center",
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center'
  }
});

export default App;