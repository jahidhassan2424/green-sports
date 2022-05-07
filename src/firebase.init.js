// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwYbfnfI3BUOLbPtuiQhAlg8vCdBSOV1Q",
    authDomain: "green-sports-18e07.firebaseapp.com",
    projectId: "green-sports-18e07",
    storageBucket: "green-sports-18e07.appspot.com",
    messagingSenderId: "681622053297",
    appId: "1:681622053297:web:77fb7a22aa6172e16a5d90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;