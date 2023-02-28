import {View, FlatList, StyleSheet, Text} from "react-native" ;
import TextBlock from "../components/TextBlock";
import CheckListItem from "../components/CheckListItem";

const ResourcesScreen = () => {
  const header = "Resources"
  const body = "Body Text Here"
  const data = [{
    id: 0,
    text: "dummy resource 1"
  }, 
  {
    id: 1,
    text: "dummy resource 2"
  }, 
  {
    id: 2,
    text: "dummy resource 2"
  },]

  return (
    <View style={styles.container}>
    	<TextBlock headerText={header} bodyText={body} />
      <FlatList
        data={data}
        renderItem={({item}) => <CheckListItem title={item.text} />}
        keyExtractor={item => item.id}
      />
  	</View>
    )
}

//list of items with checkboxes

export default ResourcesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}
)