// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3IFPTA8aUqeGLQ-ZmIGRCjXWRGHTLAjw",
  authDomain: "clone-ca8c1.firebaseapp.com",
  projectId: "clone-ca8c1",
  storageBucket: "clone-ca8c1.appspot.com",
  messagingSenderId: "449667647710",
  appId: "1:449667647710:web:78138d8596d44fc0065a4f",
  measurementId: "G-Z8DSSN2LCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };