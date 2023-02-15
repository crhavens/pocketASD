import {View, Text, StyleSheet} from "react-native" ;
import TextBlock from "../components/TextBlock";

const ResourcesScreen = () => {
  const header = "Resources"
  const body = "Body Text Here"

  return (
    <View style={styles.container}>
    	<TextBlock headerText={header} bodyText={body} />
  	</View>
    )
}

export default ResourcesScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
}
)