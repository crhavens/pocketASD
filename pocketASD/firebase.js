// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI01kH9hszfynsAE_T7_7pWLaO1D9wMcg",
  authDomain: "pocketasd-fe2b5.firebaseapp.com",
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

export const auth = getAuth(app);