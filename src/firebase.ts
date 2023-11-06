// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnn73w2jv69OjnluxHdSOmceYif_sdHtk",
  authDomain: "udemy-house-marketplace-8a2a6.firebaseapp.com",
  projectId: "udemy-house-marketplace-8a2a6",
  storageBucket: "udemy-house-marketplace-8a2a6.appspot.com",
  messagingSenderId: "628326610132",
  appId: "1:628326610132:web:206b18078b68683f443741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
