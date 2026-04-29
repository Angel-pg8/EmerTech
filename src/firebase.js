// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK3x2j1-w5PIrMoWB8LLVxKqOkl0CqPuw",
  authDomain: "emertech-9bf44.firebaseapp.com",
  databaseURL: "https://emertech-9bf44-default-rtdb.firebaseio.com",
  projectId: "emertech-9bf44",
  storageBucket: "emertech-9bf44.firebasestorage.app",
  messagingSenderId: "106298819054",
  appId: "1:106298819054:web:4c1000c1c7a2dc94118eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)