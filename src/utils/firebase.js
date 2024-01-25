// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy0nZg1DB8YVPRh7V6ExeRncnD2eDmDCI",
  authDomain: "netflixgpt-8ef6d.firebaseapp.com",
  projectId: "netflixgpt-8ef6d",
  storageBucket: "netflixgpt-8ef6d.appspot.com",
  messagingSenderId: "649754478468",
  appId: "1:649754478468:web:26ca837ebf6545e5debfd1",
  measurementId: "G-52231B9652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();