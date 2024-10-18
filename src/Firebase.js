// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {
// 	getAuth,
// 	GoogleAuthProvider,
// 	FacebookAuthProvider,
// 	TwitterAuthProvider,
// 	signInWithPopup,
// } from "firebase/auth"; // Use the correct import
// import { getFirestore } from "firebase/firestore/lite";

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyCulr0vwd6BtfQE9CXG3pW0RAdoGchBjhA",
// 	authDomain: "budgettracker-67ba6.firebaseapp.com",
// 	projectId: "budgettracker-67ba6",
// 	storageBucket: "budgettracker-67ba6.appspot.com",
// 	messagingSenderId: "286267684395",
// 	appId: "1:286267684395:web:a68767ab1a50e5e3c91c6e",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };

// // Google sign-in
// const googleProvider = new GoogleAuthProvider();
// signInWithPopup(auth, googleProvider)
// 	.then((result) => {
// 		// User signed in
// 		console.log(result.user);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

// // Facebook sign-in
// const facebookProvider = new FacebookAuthProvider();
// signInWithPopup(auth, facebookProvider)
// 	.then((result) => {
// 		console.log(result.user);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

// // Twitter sign-in
// const twitterProvider = new TwitterAuthProvider();
// signInWithPopup(auth, twitterProvider)
// 	.then((result) => {
// 		console.log(result.user);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
	getAuth,
	GoogleAuthProvider,
	FacebookAuthProvider,
	TwitterAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

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

export {
	auth,
	db,
	GoogleAuthProvider,
	FacebookAuthProvider,
	TwitterAuthProvider,
};

// Google sign-in function
export const signInWithGoogle = () => {
	const googleProvider = new GoogleAuthProvider();
	return signInWithPopup(auth, googleProvider);
};

// Facebook sign-in function
export const signInWithFacebook = () => {
	const facebookProvider = new FacebookAuthProvider();
	return signInWithPopup(auth, facebookProvider);
};

// Twitter sign-in function
export const signInWithTwitter = () => {
	const twitterProvider = new TwitterAuthProvider();
	return signInWithPopup(auth, twitterProvider);
};

// https://budgettracker-67ba6.firebaseapp.com/__/auth/handler
