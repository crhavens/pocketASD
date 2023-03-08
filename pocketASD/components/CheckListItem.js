import { useState } from "react";
import {View, Text, StyleSheet, Linking} from "react-native" ;
import Checkbox from "expo-checkbox";

const CheckListItem = (props) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox value={isChecked} onValueChange={setChecked} />
        <Text style={styles.header}>{props.title}</Text>
      </View>
      <Text onPress={() => {Linking.openURL(props.link)}} style={styles.link} >{props.link}</Text>
      <Text style={styles.body}>{props.text}</Text>
  	</View>
    )
}

export default CheckListItem

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginBottom: 50,
      marginHorizontal: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5
  },
  bodyContainer: {
    flex: 1
  },
  header: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    textAlign: "center",
    marginBottom: 5
  },
  body: {
    textAlign: 'center'
  }
}
)