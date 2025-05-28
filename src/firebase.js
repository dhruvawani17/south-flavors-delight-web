// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr5UNdkQ8cfN0fQr8DJqojxqioE2MuS9k",
  authDomain: "restaurant-490b7.firebaseapp.com",
  projectId: "restaurant-490b7",
  storageBucket: "restaurant-490b7.firebasestorage.app",
  messagingSenderId: "128757641547",
  appId: "1:128757641547:web:2f20eee6ef126568b0f8ce",
  measurementId: "G-D103ZMGV9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
