import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbNoG1ONbNyoQcrHO1mXKlweVNo_KU-9Q",
  authDomain: "chate-61458.firebaseapp.com",
  projectId: "chate-61458",
  storageBucket: "chate-61458.firebasestorage.app",
  messagingSenderId: "737270213482",
  appId: "1:737270213482:web:f8f4644e414563edbd9313",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ✅ Firestore instance

export { db }; // ✅ Export db
