import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from "firebase/app";


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyBTHU9kqcn8CwLAzMTZdjsMeKtNTlpraD0",
  authDomain: "todo-app-73673.firebaseapp.com",
  databaseURL: "https://todo-app-73673-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-app-73673",
  storageBucket: "todo-app-73673.appspot.com",
  messagingSenderId: "414248530365",
  appId: "1:414248530365:web:f7fe792aaeedaea5f122d4"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

