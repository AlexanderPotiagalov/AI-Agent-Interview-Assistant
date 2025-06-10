// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ38wXErwLhB26M7oEudSqUqeTc4YVXrs",
  authDomain: "prepmate-4b70d.firebaseapp.com",
  projectId: "prepmate-4b70d",
  storageBucket: "prepmate-4b70d.firebasestorage.app",
  messagingSenderId: "827212656454",
  appId: "1:827212656454:web:35dc34b4b8a89fbb3abf47",
  measurementId: "G-QHYB2VXJZK",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
