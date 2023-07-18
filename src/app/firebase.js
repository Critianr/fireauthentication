import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBl3J55phPVlPu7wD1hMXGFsypmgcTqci0",

  authDomain: "logeo-8a0b5.firebaseapp.com",

  projectId: "logeo-8a0b5",

  storageBucket: "logeo-8a0b5.appspot.com",

  messagingSenderId: "345090925679",

  appId: "1:345090925679:web:3b0ecd69668171df64199a",

  measurementId: "G-H0Z0FDG4QR"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)