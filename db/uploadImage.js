// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
import initFire from './config';

import 'firebase/storage';
 

const storage = firebase.storage();

export default storage; 