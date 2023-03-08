import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState, useEffect } from 'react'
import { getCurrentUserDataByField, setCurrentUserData } from "../api/firebase-api";

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
  
  const [remoteData, setRemoteData] = useState({})

  useEffect(() => {
    async function getData() {
      const data = await getCurrentUserDataByField(null)
      setRemoteData(data)
    }
    getData();
  }, [])

  useEffect(() => {
    if (remoteData != null && Object.keys(remoteData).length != 0) {
      initializeData(remoteData)
    }
  }, [remoteData]);

  const initializeData = () => {
    console.log("Data received from backend");
    setFirstName(remoteData.firstName);
    setLastName(remoteData.lastName);
    setBirthDay(remoteData.birthDay);
    setGender(remoteData.gender);
    setGuardian(remoteData.guardian);
    setMailing(remoteData.mailing);
    setEmail(remoteData.email);
    setProvider(remoteData.provider);
    setMedicalCenter(remoteData.medicalCenter);
  }

  const handleFormUpdate = async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      birthDay: birthDay,
      gender: gender,
      email: email,
      mailing: mailing,
      provider: provider,
      medicalCenter: medicalCenter,
      guardian: guardian
    }
    setCurrentUserData(data)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>

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

          <KeyboardAvoidingView style={styles.formsContainer}>

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
          </KeyboardAvoidingView>

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
        </View>
      </TouchableWithoutFeedback>

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
    backgroundColor: '#078279',
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
    flex: 8,
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
    width: '100%',
  },
  input: {
    minWidth: 200,
    borderWidth: 1,
    borderColor: '#078279',
    backgroundColor: '#ddd',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  multiInput: {
    borderWidth: 1,
    borderColor: '#078279',
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
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  submitContainer: {
    marginTop: 35,
    flex: 2,
    justifyContent: 'top',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    margin: 0,
    padding: 0,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#078279',
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'Georgia',
  },
})