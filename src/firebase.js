import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCIMxy44lh7eZzkTODm-s4xcRgNtqNvpus",
    authDomain: "rolling-store-ea.firebaseapp.com",
    databaseURL: "https://rolling-store-ea.firebaseio.com",
    projectId: "rolling-store-ea",
    storageBucket: "rolling-store-ea.appspot.com",
    messagingSenderId: "682924849839",
    appId: "1:682924849839:web:40ad10a7a895c6341fb25a"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const firebaseApp= firebase;
  
  export {firebaseApp};