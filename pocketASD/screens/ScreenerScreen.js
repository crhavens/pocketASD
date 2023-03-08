import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { auth, db } from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useEffect , useState, React } from "react";
import { async } from "@firebase/util";

const ScreenerScreen = () => {

  const navigation = useNavigation()
  const[answers, setAnswers]= useState(['null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'])
  const[answeredBefore, setAnsweredBefore] = useState(0) // 1 if user has submitted results before, 0 otherwise


  useEffect (() => {
    async function getAnswers() {
      try{ 
        const docSnap =  await getDoc(doc(db, "users", auth.currentUser.uid))
        if (docSnap.data().surveryResponses != null) {
          setAnswers(docSnap.data().surveryResponses)
          setAnsweredBefore(1)
        }
      } catch(e) { }
    }
    getAnswers()
  }, []);

  const buttons = () => {
    if(answeredBefore === 1) {
      return(
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => 
              navigation.navigate('Question', {answers: ['null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null']})
            }
          >
            <Text style={styles.buttonText}>
              Retake the Screener
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Results', {answers: answers})}
          >
            <Text style={styles.buttonText}>
              View your results
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
    else {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Question', {answers: answers})}
        >
          <Text style={styles.buttonText}>
            Take the Screener
          </Text>
        </TouchableOpacity>
      )
    }
  }

  return (
    <View style={{padding:10}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight:'bold',
          padding:10
        }}
      >
        Autism Screening Test
      </Text>
      <Text
        style={{
          fontSize:17,
          padding:10
        }}
      >
        Here, you can take the M-Chat-R™ screener, which will ask a series of 20 questions about your child's behavior.
        {"\n\n"}
        Taking the screener results in a score that indicates whether further evaluation is needed.
        {"\n\n"}
        Note: This screener does not serve in the place of a formal diagnosis by a doctor.
        {"\n\n"}
        <Text style={{
            textDecorationLine:"underline",
        }}
          onPress={() => Linking.openURL('https://mchatscreen.com/')}
        >
          Tap here for more about M-Chat-R™
        </Text>
      </Text>
      {buttons()}
    </View>
    
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#078279',
    width: '100%',
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

export default ScreenerScreen