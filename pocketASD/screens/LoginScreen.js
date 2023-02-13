import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

// https://www.youtube.com/watch?v=ql4J6SpLXZA
const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
          navigation.replace("Home")
      }
    })
    return unsubscribe
  }, [])

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with: ", user.email)
    } )
    .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
    } )
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Pocket
            <Text style={styles.titleTextContrast}>ASD</Text>
        </Text>
      </View>

      <View style={styles.loginContainer}>      
        <View style={styles.inputContainer}>
          <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
              autoCapitalize={false}
          />
          <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
              onPress={handleLogin}
              style={styles.button}
          >
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={handleSignUp}
              style={[styles.button, styles.buttonOutline]}
          >
              <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
      backgroundColor: '#078279',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
  },
  buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#078279',
      borderWidth: 2, 
  },
  buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  },
  buttonOutlineText: {
      color: '#078279',
      fontWeight: '700',
      fontSize: 16,
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  inputContainer: {
      width: '80%',
  },
  input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
  },
  loginContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 32,
    fontStyle: 'italic',
    fontFamily: 'Georgia',
  },
  titleTextContrast: {
    color: '#078279',
  },
})