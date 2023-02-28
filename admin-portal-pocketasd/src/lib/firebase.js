// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
import { Analytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI01kH9hszfynsAE_T7_7pWLaO1D9wMcg",
  authDomain: "pocketasd-fe2b5.firebaseapp.com",
  databaseURL: "https://pocketasd-fe2b5-default-rtdb.firebaseio.com",
  projectId: "pocketasd-fe2b5",
  storageBucket: "pocketasd-fe2b5.appspot.com",
  messagingSenderId: "612145389782",
  appId: "1:612145389782:web:08dc67814b43fb0b582977",
  measurementId: "G-06LG6Y82F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//if (analytics.isSupported()) {
const analytics = getAnalytics(app);
//}

const db = getFirestore(app);

export { db };