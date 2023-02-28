import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

const ScreenerScreen = () => {

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
        <Text style={{
            textDecorationLine:"underline",
        }}
          onPress={() => Linking.openURL('https://mchatscreen.com/')}
        >
          Tap here for more about M-Chat-R™
        </Text>
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Question')}
      >
        <Text style={styles.buttonText}>
          Take the Screener
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

export default ScreenerScreen