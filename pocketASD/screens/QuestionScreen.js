import { useEffect, useState, React } from 'react'
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import questions from '../data/questions'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'
import { auth, db } from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util';


const QuestionScreen = () => {

  const navigation = useNavigation()

  const[index, setIndex] = useState(0)
  const[answers, setAnswers]= useState(['null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null'])

  const data = questions;
  const currentQuestion = data[index];

  useEffect(() => {
    // here we will try to pull the answers from firestore
    async function getAnswers() {
      try{ 
        console.log(auth.currentUser.uid)
        const docSnap =  await getDoc(doc(db, "users", auth.currentUser.uid))
        if (docSnap.data().surveryResponses != null) {
          setAnswers(docSnap.data().surveryResponses)
          navigation.navigate('Results',{answers: answers})
        }
        console.log("Read document succesfully with id: ", auth.currentUser.uid)
      } catch(e) { alert(e.message) }
    }
    getAnswers()
  }, []);

  const submitToDatabase = async () => {
    try {
      const docRef = await setDoc(doc(db, "users", auth.currentUser.uid), {
        // put the array and (maybe) result here 
        surveryResponses: answers
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
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Pressable 
            onPress={()=>
              index===0 ? navigation.navigate('Screener') : setIndex(index-1)}
          >
            <Icon
              name="arrow-alt-circle-left"
              size="25"
            />  
          </Pressable>
          <Text
            style={styles.progress}
          >
            {index + 1}/20
          </Text>
        </View>
        <Text style={styles.question}>
          {currentQuestion?.question}
        </Text>
        <Pressable
          onPress={() => {
            let answersCopy=[...answers];
            answersCopy[index]='Yes';
            setAnswers(answersCopy);
          }}
          style={
            answers[index]==='Yes' ? styles.optionButtonPressed : styles.optionButtonUnpressed
          }
        >
          <Text style={styles.optionButtonText}>
            Yes
          </Text>
        </Pressable>


        <Pressable
          onPress={() =>{
            let answersCopy=[...answers];
            answersCopy[index]='No';
            setAnswers(answersCopy);
          }}
          style={
            answers[index]==='No' ? styles.optionButtonPressed : styles.optionButtonUnpressed
          }
        >
          <Text style={styles.optionButtonText}>
            No
          </Text>
        </Pressable>
      </View>
      <View style={{marginBottom:30}}>
        <TouchableOpacity
          style={
            answers[index]!=='null' ? styles.confirmButtonGreen : styles.confirmButtonGray
          }
          onPress={() => {
            if (index === 19) {
              submitToDatabase()
              navigation.navigate('Results',{answers: answers})
            }
            else if (answers[index]!=='null') {
              setIndex(index + 1)
            }
          }}
        >
          <Text style={styles.confirmButtonText} >
            { index == 19 ? "Submit Answers" : "Continue" }
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
  contentContainer: {
    flex: 1,
  },
  progress: {
    fontSize:20,
    textAlign:'center',
    marginBottom:20
  },
  question: {
    fontWeight:'bold',
    fontSize:20
  },
  optionButtonUnpressed: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop:20,
    borderStyle:'solid',
    borderColor:'black',
    borderWidth: 2
  },
  optionButtonPressed: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop:20,
    borderStyle:'solid',
    borderColor:'#078279',
    borderWidth: 2
  },
  optionButtonText: {
    fontWeight:'bold',
    fontSize: 16
  },
  confirmButtonGreen: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop:20,
    backgroundColor: '#078279',
  },
  confirmButtonGray: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop:20,
    backgroundColor: 'gray',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  }
})

export default QuestionScreen