// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-fyp.firebaseapp.com',
  projectId: 'mern-fyp',
  storageBucket: 'mern-fyp.appspot.com',
  messagingSenderId: '201130835854',
  appId: '1:201130835854:web:8f94487f1d28edbe57eedf',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
