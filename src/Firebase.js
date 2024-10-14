// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCulr0vwd6BtfQE9CXG3pW0RAdoGchBjhA",
	authDomain: "budgettracker-67ba6.firebaseapp.com",
	projectId: "budgettracker-67ba6",
	storageBucket: "budgettracker-67ba6.appspot.com",
	messagingSenderId: "286267684395",
	appId: "1:286267684395:web:a68767ab1a50e5e3c91c6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
// publin name facing--project-286267684395
// facebook auth - https://budgettracker-67ba6.firebaseapp.com/__/auth/handler
