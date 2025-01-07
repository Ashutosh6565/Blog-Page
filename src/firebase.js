// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcuaxFFL0smZjavO4oa48HumiWLnEltc4",
  authDomain: "blogging-app-7e692.firebaseapp.com",
  projectId: "blogging-app-7e692",
  storageBucket: "blogging-app-7e692.firebasestorage.app",
  messagingSenderId: "884458289777",
  appId: "1:884458289777:web:ae7037f43427ad40d1f9d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);