import firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCeLuSfEawVJsqlOCvFNQQtVFpxmRp2W5A",
  authDomain: "ask-me-7d112.firebaseapp.com",
  projectId: "ask-me-7d112",
  storageBucket: "ask-me-7d112.appspot.com",
  messagingSenderId: "1027829612361",
  appId: "1:1027829612361:web:f7378853ec54cffe77a498",
  measurementId: "G-4WB245Q40D"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()