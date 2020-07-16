import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBeUYE_tMXUMu-IuJ2IzWxREbBOUVCvmRQ",
    authDomain: "example-react-d2bb7.firebaseapp.com",
    databaseURL: "https://example-react-d2bb7.firebaseio.com",
    projectId: "example-react-d2bb7",
    storageBucket: "example-react-d2bb7.appspot.com",
    messagingSenderId: "947546513555",
    appId: "1:947546513555:web:20cead18017b6fa6256d66",
    measurementId: "G-ZJ9V7FB5R5"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;