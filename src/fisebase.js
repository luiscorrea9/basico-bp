// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3Mm9cJDQsym46gKLepLVUQCvkI8jTryM",
  authDomain: "crud-basico-bp-3cadf.firebaseapp.com",
  projectId: "crud-basico-bp-3cadf",
  storageBucket: "crud-basico-bp-3cadf.appspot.com",
  messagingSenderId: "690519026525",
  appId: "1:690519026525:web:c6d988c3e28798a62996b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db} 