import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCmt_Bdv9Ssp0-8gx27L-DoGbh-XJ8Lw1Y",
    authDomain: "organize1886.firebaseapp.com",
    databaseURL: "https://organize1886-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "organize1886",
    storageBucket: "organize1886.appspot.com",
    messagingSenderId: "77287563568",
    appId: "1:77287563568:web:47245defa4e325a660a8f5"
});


export {firebaseConfig as firebase };