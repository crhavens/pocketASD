import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from "react-native" ;
import { useNavigation } from '@react-navigation/native'

const SchedulerConfirmationScreen = ({route}) => {

  const [selectedDates, setSelectedDates] = useState([])
  const navigation = useNavigation()

  useEffect(() =>{
    setSelectedDates(route.params.dates)
  }, []);

  function editDates(){
    navigation.navigate("SchedulerScreen", {dates: selectedDates})
  }

  return (
    <View style={styles.container}>
      <Text>Your current requested dates are </Text>
      {selectedDates.sort().map(item => { return <Text key={item}>{item}</Text>})}
      <Button title='Edit Dates' onPress={editDates}></Button>
    </View>
  )
}

export default SchedulerConfirmationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}
)