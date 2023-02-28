// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { Analytics } from "firebase/analytics";
import { async } from "@firebase/util";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI01kH9hszfynsAE_T7_7pWLaO1D9wMcg",
  authDomain: "pocketasd-fe2b5.firebaseapp.com",
  databaseURL: "https://pocketasd-fe2b5-default-rtdb.firebaseio.com",
  projectId: "pocketasd-fe2b5",
  storageBucket: "pocketasd-fe2b5.appspot.com",
  messagingSenderId: "612145389782",
  appId: "1:612145389782:web:4c39119d022ac657582977",
  measurementId: "G-HKDR6TVH7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//if (analytics.isSupported()) {
  const analytics = getAnalytics(app);
//}
const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db };

/*async function addUser() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: auth.currentUser?.email,
      password: auth.currentUser?.password,
      random: "hello world"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error adding document: ", e);
  }
}*/