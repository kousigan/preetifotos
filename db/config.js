 import firebase from 'firebase/app';
 
 import 'firebase/storage';
 import 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyC-cfLzCA5enjRYPWIWO3oLoT7I8ICr47M",
    authDomain: "preetifotos-e4812.firebaseapp.com",
    databaseURL: "https://preetifotos-e4812.firebaseio.com",
    projectId: "preetifotos-e4812",
    storageBucket: "preetifotos-e4812.appspot.com",
    messagingSenderId: "653728865526",
    appId: "1:653728865526:web:a78b49ba8947020da920d7",
    measurementId: "G-X9B815ZX4V"
    };
const initFire = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export {db,storage,firebase as default}