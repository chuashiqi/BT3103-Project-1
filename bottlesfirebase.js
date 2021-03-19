import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAHSmDs79gW8MMtJaEmv13HhdPLLqBbpv8",
  authDomain: "bt3103-project-30351.firebaseapp.com",
  databaseURL:"https://console.firebase.google.com/u/2/project/bt3103-project-30351/firestore/data~2F",
  projectId: "bt3103-project-30351",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database
