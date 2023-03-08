import {View, Text, StyleSheet} from "react-native" ;

const TextBlock = (props) => {

  return (
    <View style={styles.container}>
    	<View style={styles.header}>
    		<Text style={styles.headerText}>{props.headerText}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>{props.bodyText}</Text>
      </View>
  	</View>
    )
}

export default TextBlock

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      flex: 1,
      marginTop: 5
  },
  headerText: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
  },
  body: {
      flex: 4,
  },
  bodyText: {
      textAlign: 'center',
  },
}
)