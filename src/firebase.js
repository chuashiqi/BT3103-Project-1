import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHSmDs79gW8MMtJaEmv13HhdPLLqBbpv8",
    authDomain: "bt3103-project-30351.firebaseapp.com",
    projectId: "bt3103-project-30351",
    storageBucket: "bt3103-project-30351.appspot.com",
    messagingSenderId: "35470641317",
    appId: "1:35470641317:web:ee0dc2736378a5f260e54c",
    measurementId: "G-1D9KGJE7TH"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
var auth = firebase.auth();
export default {database, auth};