import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from "react-native" ;
import { Calendar } from 'react-native-calendars';
import { async } from '@firebase/util';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase'

const SchedulingScreen = () => {

  const [selectedDates, setSelectedDates] = useState(new Set());
  const [markedDates, setMarkedDates] = useState({});
  const today = getToday()

  useEffect(() => {
    // pull appointment days from firebase
    async function getAppointments() {
      try {
        const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid))
        if (docSnap.data().appointmentDateRequest != null) {
          // we have data already, go to another page (or do whatever u want to handle)
        }
        docSnap.data().appointmentDateRequest.forEach(item => {updateSelectedDates(item)})
      }
      catch(e) {}
    }

    getAppointments();
    
  }, []);

  function updateSelectedDates(date) {
    console.log(date)
    let dates = selectedDates;
    if (dates.has(date)){
      dates.delete(date)
    }else if(dates.size < 3){
      dates.add(date)
    }
    //console.log(dates)
    setSelectedDates(dates)
    const marked = {};
    dates.forEach(date => (Object.assign(marked, {[date]: {selected: true, selectedColor: 'blue', disabled: false}})))
    //console.log(marked)
    setMarkedDates(marked)
  }

  const confirmDates = async () => {
    console.log(selectedDates)
    const appointmentDateRequest = Array.from(selectedDates)
    // Upload data to firebase
    try {
      const docRef = await setDoc(doc(db, "users", auth.currentUser.uid),
      {
        // data
        appointmentDateRequest
      },
      {
        merge: true
      });
      console.log("Document written succesfully.");
    }
    catch(e) {
      console.log("Error adding document: " , e);
    }
  } 

  function disableDays(){
    return selectedDates.size >= 3
  }

  function getToday(){
    const date = new Date();
    var month = '-';
    if(date.getMonth() + 1 < 10){
      month += '0'
    }
    month += (date.getMonth() + 1) + '';
    var day = '-';
    if(date.getDate() + 1 < 10){
      day += '0'
    }
    day += (date.getDate()) + '';
    return date.getFullYear() + month + day;
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
        disabledByDefault={disableDays()}
        disableAllTouchEventsForDisabledDays={disableDays()}
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