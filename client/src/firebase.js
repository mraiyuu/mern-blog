// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a1258.firebaseapp.com",
  projectId: "mern-blog-a1258",
  storageBucket: "mern-blog-a1258.appspot.com",
  messagingSenderId: "629052794143",
  appId: "1:629052794143:web:4b5ce21f19840d53e3bc2a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

