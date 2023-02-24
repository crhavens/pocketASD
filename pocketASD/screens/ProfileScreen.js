import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = () => {
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
          />
        </View>
        
      </View>

      <View style={styles.formsContainer}>

        <Text>First Name</Text>
        <Text>Last Name</Text>
        <TextInput 
          placeholder="First Name"
          style={styles.input}
        />
        <TextInput 
          placeholder="Last Name"
          style={styles.input}
        />


        <Text>Date of Birth</Text>
        <Text>Gender at Birth</Text>
        <TextInput 
          placeholder="Date of Birth"
          style={styles.input}
        />
        <TextInput 
          placeholder="Gender"
          style={styles.input}
        />
        
        <Text>Email Address</Text>
        <TextInput 
          placeholder="Email"
          style={styles.input}
        />

        <Text>Mailing Address</Text>
        <TextInput 
          placeholder="Mailing Address"
          style={styles.input}
        />

        <Text>Primary Care Provider</Text>
        <TextInput 
          placeholder="Care Provider"
          style={styles.input}
        />

        <Text>Medical Insurance Center</Text>
        <TextInput 
          placeholder="Medical Insurance"
          style={styles.input}
        />

        <Text>Parent/Legal Guardian</Text>
        <TextInput 
          placeholder="Guardian"
          style={styles.input}
        />
      </View>

      <View styles={styles.submitContainer}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
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
    marginTop: 0,
  },
  button: {
    backgroundColor: '#078279',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  formsContainer: {
    flex: 5,
    justifyContent: 'top',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
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
    flex: 4,
    justifyContent: 'top',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    color: '#75d7c2',
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'Georgia',
  },
})