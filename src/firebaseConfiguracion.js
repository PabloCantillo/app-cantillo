// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEoRBFeBi2KJdmhfY0neAJSkM1iNX3e-8",
  authDomain: "optica-cantillo.firebaseapp.com",
  projectId: "optica-cantillo",
  storageBucket: "optica-cantillo.appspot.com",
  messagingSenderId: "753058289611",
  appId: "1:753058289611:web:59f8a46f50540e07f3c84e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(app)
export const auth = getAuth(app);
export default app;