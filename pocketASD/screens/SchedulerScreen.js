import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from "react-native" ;
import { Calendar } from 'react-native-calendars';
import { async } from '@firebase/util';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const SchedulerScreen = ({route}) => {

  const [selectedDates, setSelectedDates] = useState(new Set())
  const [markedDates, setMarkedDates] = useState({})
  const [cancelButton, setCancelButton] = useState()
  const today = getToday()
  const navigation = useNavigation()
  const maxSelected = 3

  useEffect(() => {
    // pull appointment days from firebase
    getAppointments();
    
  }, []);

  useEffect(() =>{
    if(route.params != null && route.params.dates.length > 0){
      let dates = selectedDates.clear()
      setSelectedDates(dates)
      route.params.dates.forEach(item => {updateSelectedDates(item)})
      const cancel = () => {return <Button title='Cancel' onPress={cancelEdit}></Button>}
      setCancelButton(cancel)
    }
  },[route]);

  async function getAppointments() {
    try {
      const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid))
      if (docSnap.data().appointmentDateRequest != null) {
        // we have data already, go to another page (or do whatever u want to handle)
        navigation.navigate('Confirmation',{dates: docSnap.data().appointmentDateRequest})
      }
    }
    catch(e) { alert(e.message) }
  }

  function cancelEdit(){
    getAppointments()
  }

  function updateSelectedDates(date) {
    let dates = selectedDates;
    if (dates.has(date)){
      dates.delete(date)
    }else if(dates.size < maxSelected && date > today){
      dates.add(date)
    }
    setSelectedDates(dates)
    const marked = {};
    dates.forEach(date => (Object.assign(marked, {[date]: {selected: true, selectedColor: 'blue', disabled: false, disableTouchEvent: false}})))

    setMarkedDates(marked)
  }

  const confirmDates = async () => {
    console.log(selectedDates)
    if(selectedDates.size > 0){
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
        navigation.navigate('Confirmation',{dates: Array.from(selectedDates)})
      }
      catch(e) {
        console.log("Error adding document: " , e);
      }
    }
    else{
      //error pop up
      Alert.alert('No Selected Dates', 'Please Select a Date', [
        {text: 'OK'},
      ]);
    }
  } 

  function disableDays(){
    return selectedDates.size >= maxSelected
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
      {cancelButton}
  	</View>
    )
}

export default SchedulerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}
)