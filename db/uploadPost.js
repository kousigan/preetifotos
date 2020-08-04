// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
import initFire from './config';

// Add the Firebase products that you want to use
import 'firebase/firestore'; 

const db = firebase.firestore();

export default db;