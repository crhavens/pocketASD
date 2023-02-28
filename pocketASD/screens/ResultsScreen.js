import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Pressable
} from "react-native";
import { useNavigation } from '@react-navigation/native'
import questions from '../data/questions'

const ResultsScreen = ({ route }) => {
  const navigation = useNavigation()

  const data = questions
  let score = 0
  for(let i = 0; i < 20; i++) {
    if(route.params.answers[i] == "Yes") {
      score += data[i].options.Yes
    }
    else {
      score += data[i].options.No
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
      Your results: {score}
      </Text>
      
      <Text>
        
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
            navigation.navigate('Question')
        }}
      >
        <Text style={styles.buttonText}>
          Edit your answers
        </Text>
      </TouchableOpacity>
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

export default ResultsScreen