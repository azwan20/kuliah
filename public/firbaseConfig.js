// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq8-o6UNdRNafJ7btFEvCaxTudLA_eOt0",
  authDomain: "kuliah-d02bd.firebaseapp.com",
  projectId: "kuliah-d02bd",
  storageBucket: "kuliah-d02bd.appspot.com",
  messagingSenderId: "834777880790",
  appId: "1:834777880790:web:1d630813f327753a001177",
  measurementId: "G-NP5Y0G1591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };