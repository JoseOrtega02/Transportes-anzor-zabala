// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN_FIREBASE_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID_FIREBASE_KEY,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET_FIREBASE_KEY,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_FIREBASE_KEY,
  appId: import.meta.env.VITE_APP_ID_FIREBASE_KEY,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID_FIREBASE_KEY,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default getFirestore(app);
