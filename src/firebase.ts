// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1dfHFeHWuRYjFVRsC0oJHaIeF6fVVqWo",
  authDomain: "authapp-b6348.firebaseapp.com",
  projectId: "authapp-b6348",
  storageBucket: "authapp-b6348.appspot.com",
  messagingSenderId: "528076780521",
  appId: "1:528076780521:web:08a209aa781b72e41dd178",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
