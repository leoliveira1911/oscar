// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhO3zu2_WEidBEnWDE8JGFVkRuH7D2ilU",
    authDomain: "oscar-dc69b.firebaseapp.com",
    projectId: "oscar-dc69b",
    storageBucket: "oscar-dc69b.appspot.com",
    messagingSenderId: "434273399942",
    appId: "1:434273399942:web:a0c21860ca05f890c64d07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);

