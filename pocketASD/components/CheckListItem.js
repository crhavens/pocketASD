import { useState } from "react";
import {View, Text, StyleSheet} from "react-native" ;
import Checkbox from "expo-checkbox";

const CheckListItem = (props) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
    	<Checkbox value={isChecked} onValueChange={setChecked} />
      <Text>{props.title}</Text>
  	</View>
    )
}

export default CheckListItem

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row'
  },
}
)