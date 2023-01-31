// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA6UpKaSuzkaOoTogJcAS8V1cMTN8_TL50",
    authDomain: "twitter-clone-27bfe.firebaseapp.com",
    projectId: "twitter-clone-27bfe",
    storageBucket: "twitter-clone-27bfe.appspot.com",
    messagingSenderId: "1028243110793",
    appId: "1:1028243110793:web:c75de7fc2b763993f97f58",
    measurementId: "G-SRPLDJYGGN"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

