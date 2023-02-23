import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity
} from "react-native";
import { useNavigation } from '@react-navigation/native'

const ResultsScreen = ({ route }) => {
  const navigation = useNavigation()

  return (
    <View style={{padding:10}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight:'bold',
          padding:10
        }}
      >
      Your results:
      </Text>
    </View>
  )
}

export default ResultsScreen