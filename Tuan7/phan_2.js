import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://66fc90aec3a184a84d175459.mockapi.io/task/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("Error fetching users:", error));
  }, []); // Run only once on mount

  const addUser = () => {
    const newUser = { name: "QuocKhanh" };

    fetch('https://66fc90aec3a184a84d175459.mockapi.io/task/users', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
    .then((res) => res.json())
    .then((data) => {
      setUsers((prevUsers) => [...prevUsers, data]); // Update state with the new user
      console.log('New user added.');
    });
  };

  const updateUser = () => {
    const userUpdated = { name: "QuocKhanh IUH" };
    
    fetch("https://66fc90aec3a184a84d175459.mockapi.io/task/users/11", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userUpdated)
    })
    .then((res) => res.json())
    .then((data) => {
      setUsers((prevUsers) => 
        prevUsers.map(user => (user.id === "11" ? data : user)) // Update the specific user
      );
      console.log("User updated");
    });
  };

  const deleteUser = () => {
    fetch("https://66fc90aec3a184a84d175459.mockapi.io/task/users/1", {
      method: "DELETE",
    })
    .then(() => {
      setUsers((prevUsers) => prevUsers.filter(user => user.id !== "1")); // Remove the user from state
      console.log('User deleted.');
    });
  };

  const UserItem = ({ name }) => (
    <View>
      <Text>{name}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonText} onPress={addUser}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText} onPress={updateUser}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText} onPress={deleteUser}>
          <Text>Remove</Text>
        </TouchableOpacity>
        <FlatList
          data={users}
          renderItem={({ item }) => <UserItem name={item.name} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  buttonText: {
    backgroundColor: "red",
    width: "70%",
    height: 60,
    textAlign: "center",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
