import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from "react-native" ;
import { Calendar } from 'react-native-calendars';

const SchedulingScreen = () => {

  const [selectedDates, setSelectedDates] = useState([]);
  const [markedDates, setMarkedDates] = useState({});
  const date = new Date();
  const today = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate();

  function updateSelectedDates(date){
    let dates = selectedDates;
    if(dates.length >= 3){
      dates = selectedDates.slice(1);
    }
    dates.push(date)
    //console.log(dates)
    setSelectedDates(dates)
    const marked = {};
    dates.forEach(date => (Object.assign(marked, {[date]: {selected: true, selectedColor: 'blue'}})))
    //console.log(marked)
    setMarkedDates(marked)
  }

  function confirmDates(){
    console.log(selectedDates)
  }

  return (
    <View style={styles.container}>
    	<Calendar 
        minDate={today}
        onDayPress={date => {
          //console.log(date.dateString);
          updateSelectedDates(date.dateString);
        }}
        markedDates={markedDates}
      />
      <Button onPress={confirmDates} title="Confirm Dates"/>
  	</View>
    )
}

export default SchedulingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}
)