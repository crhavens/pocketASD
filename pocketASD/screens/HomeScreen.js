import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth, db } from '../firebase'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { async } from '@firebase/util'
import { addDoc, setDoc, doc } from "firebase/firestore"

// https://www.youtube.com/watch?v=ql4J6SpLXZA
const HomeScreen = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        navigation.navigate("Login")
      })
      .catch(error => alert(error.message))
  }

  const addUser = async () => {
    try {
      console.log(auth.currentUser.uid);
      const docRef = await setDoc(doc(db, "users", auth.currentUser.uid), {
        email: auth.currentUser?.email,
        random: "hello world!",
      },
      {
        merge: true
      });
      console.log("Document written successfully");
    } catch(e) {
      console.log("Error adding document: ", e);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Hello {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#078279',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})