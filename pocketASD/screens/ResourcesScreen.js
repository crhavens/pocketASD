import {View, FlatList, StyleSheet, Text} from "react-native" ;
import TextBlock from "../components/TextBlock";
import CheckListItem from "../components/CheckListItem";
import resources from "../data/resources";

const ResourcesScreen = () => {
  const header = "Resources"
  const body = "Click on each item to learn more. Put a check mark if you already have the benefits taken care of. If you are ready to avail of the benefits listed above, and need additional guidance from your Pocket ASD case manager, send an email to mycasemanager@pocketASD.org (this is a hypothetical email address). You can expect a return call within 24 hours.  "
  const data = resources

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}> 
        <TextBlock headerText={header} bodyText={body} />
      </View>
      <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => <CheckListItem title={item.header} link={item.link} text={item.text} />}
        keyExtractor={item => item.id}
      />
      </View>
  	</View>
    )
}

//list of items with checkboxes

export default ResourcesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1
  },
  listContainer: {
    flex: 3
  }
}
)