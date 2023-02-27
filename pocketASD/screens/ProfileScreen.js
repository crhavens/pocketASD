import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react'
import { async } from '@firebase/util'
import { auth, db } from '../firebase'
import { setDoc, doc } from "firebase/firestore"

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [mailing, setMailing] = useState('')
  const [provider, setProvider] = useState('')
  const [medicalCenter, setMedicalCenter] = useState('')
  const [guardian, setGuardian] = useState('')

  const handleFormUpdate = async () => {
    try {
      const docRef = await setDoc(doc(db, "users", auth.currentUser.uid), {
        firstName: firstName,
        lastName: lastName,
        birthDay: birthDay,
        gender: gender,
        email: email,
        mailing: mailing,
        provider: provider,
        medicalCenter: medicalCenter,
        guardian: guardian,
      },
      {
        merge: true
      });
      console.log("Document written successfully");
    } catch(e) {
      console.log("Error adding document: ", e)
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Profile</Text>
      </View>

      <View style={styles.profilePictureContainer}>
        {/* profile picture with edit options */}
        <View style={styles.profilePicture} >
          <Icon
            name="user-circle"
            size="90"
            color="#000"
          />
        </View>
        
      </View>

      <View style={styles.formsContainer}>

        <View style={styles.horizontalPrompts}>
          <Text style={styles.text}>First Name</Text>
          <Text style={styles.text}>Last Name</Text>
        </View>
        <View style={styles.horizontalInputs}>
          <TextInput 
            placeholder="First Name"
            style={styles.multiInput}
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          <TextInput 
            placeholder="Last Name"
            style={styles.multiInput}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </View>

        <View style={styles.horizontalPrompts}>
          <Text style={styles.text}>Date of Birth</Text>
          <Text style={styles.text}>Gender at Birth</Text>
        </View>
        <View style={styles.horizontalInputs}>
          <TextInput
            autoCapitalize={false}
            placeholder="MM/DD/YYYY"
            style={styles.multiInput}
            value={birthDay}
            onChangeText={text => setBirthDay(text)}
          />
          <TextInput 
            placeholder="Gender"
            style={styles.multiInput}
            value={gender}
            onChangeText={text => setGender(text)}
          />
        </View>
        
        <Text style={styles.text}>Email Address</Text>
        <TextInput 
          autoCapitalize={false}
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.text}>Mailing Address</Text>
        <TextInput 
          placeholder="Mailing Address"
          style={styles.input}
          value={mailing}
          onChangeText={text => setMailing(text)}
        />

        <Text style={styles.text}>Primary Care Provider</Text>
        <TextInput 
          placeholder="Care Provider"
          style={styles.input}
          value={provider}
          onChangeText={text => setProvider(text)}
        />

        <Text style={styles.text}>Medical Insurance Center</Text>
        <TextInput 
          placeholder="Medical Insurance"
          style={styles.input}
          value={medicalCenter}
          onChangeText={text => setMedicalCenter(text)}
        />

        <Text style={styles.text}>Parent/Legal Guardian</Text>
        <TextInput 
          placeholder="Guardian"
          style={styles.input}
          value={guardian}
          onChangeText={text => setGuardian(text)}
        />
      </View>

      <View style={styles.submitContainer}>
        <View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleFormUpdate}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

    </KeyboardAvoidingView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#75D7C2',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '20'
  },
  formsContainer: {
    margin: 20,
    paddingTop: 5,
    flex: 4,
    justifyContent: 'top',
    alignItems: 'center',
    width: '100%',
  },
  horizontalInputs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  horizontalPrompts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#75D7C2',
    backgroundColor: '#ddd',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: '60%',
    fontSize: 15,
  },
  multiInput: {
    borderWidth: 1,
    borderColor: '#75D7C2',
    backgroundColor: '#ddd',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    flex: 1, 
  },
  profilePicture: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#74B1D6',
  },
  profilePictureContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  submitContainer: {
    marginTop: 35,
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#75d7c2',
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'Georgia',
  },
})