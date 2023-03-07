import { db, auth } from '../firebase'
import { async } from '@firebase/util'
import { getDoc, doc, setDoc } from 'firebase/firestore'

// returns the current user's data in the field given
// if the field is null then it will return all of the user's data
// if the field is not available we will return nothing
async function getCurrentUserDataByField(dataField) {
  try {
    if (dataField == null) {
      return (await getDoc(doc(db, "users", auth.currentUser.uid))).data()
    }
    else {
      const data = (await getDoc(doc(db, "users", auth.currentUser.uid))).data()
      return data[dataField]
    }
  } catch(e) { alert(e.message) }
}

// This will update the user's document with the data implemented
// If you would like to change multiple fields please create an Object with the field-value
// pairs you wish to change included in the object.
async function setCurrentUserData(data) {
  console.log(data)
  try {
    if (data != null) {
      const docRef = await setDoc(doc(db, "users", auth.currentUser.uid), data,
      {
        merge: true
      });
      console.log("Document written successfully.")
    }

  } catch(e) { alert(e.message) }
}

export { getCurrentUserDataByField, setCurrentUserData }