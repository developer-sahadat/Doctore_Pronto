// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDtrmDz4I3WTTbf2tbhjA0YpI2a4DTi6o",
  authDomain: "doctor-pronto.firebaseapp.com",
  projectId: "doctor-pronto",
  storageBucket: "doctor-pronto.appspot.com",
  messagingSenderId: "817779733734",
  appId: "1:817779733734:web:69d3438b23454d9841b727",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
