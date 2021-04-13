
import firebase from 'firebase';
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyDc6zIgLFQVtj08drA-ePGEacIL-g8UOkc",
    authDomain: "benjamin-region-hongkong.firebaseapp.com",
    databaseURL: "https://benjamin-region-hongkong.firebaseio.com",
    projectId: "benjamin-region-hongkong",
    storageBucket: "benjamin-region-hongkong.appspot.com",
    messagingSenderId: "552614767644",
    appId: "1:552614767644:web:752fa726fe77c1267643d9"
};
// Initialize Firebase


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }


 const auth = firebase.auth();
 const firestore = firebase.firestore();

 export {
     auth, firestore
 }

 