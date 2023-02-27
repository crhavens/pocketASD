import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity
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
      Your Score: {score}
      </Text>
    </View>
  )
}

export default ResultsScreen