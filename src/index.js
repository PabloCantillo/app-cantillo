import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDEoRBFeBi2KJdmhfY0neAJSkM1iNX3e-8",
  authDomain: "optica-cantillo.firebaseapp.com",
  projectId: "optica-cantillo",
  storageBucket: "optica-cantillo.appspot.com",
  messagingSenderId: "753058289611",
  appId: "1:753058289611:web:59f8a46f50540e07f3c84e"
};

const app = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(app)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
