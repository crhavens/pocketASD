import { View, Text, StyleSheet, Linking, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native'
import questions from '../data/questions'
import results from '../data/results'

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

  var result_text
  if(score >= 8) {
    result_text = results.High
  }
  else if(score >= 3) {
    result_text = results.Moderate
  }
  else {
    result_text = results.Low
  }

  return (
    <View style={{flex:1, padding:10}}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight:'bold',
            padding:10
          }}
        >
          Your results: {score}
        </Text>
        <Text style={{fontSize:20, padding:10}}>
          
          {result_text}
        </Text>
      </View>
      <View>
        <Text
          style = {{
            padding: 10,
            fontSize: 16,
            textDecorationLine:"underline",
            justifyContent:'center'
          }}
          onPress={() => {
              navigation.navigate('Question', {answers: route.params.answers})
          }}
        >
            Edit your answers
        </Text>
      </View>
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

  // usedfor testing
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
})

export default ResultsScreen