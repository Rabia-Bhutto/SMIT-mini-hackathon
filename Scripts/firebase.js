import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  // authenticaion
  createUserWithEmailAndPassword,
  // sigin
  signInWithEmailAndPassword,
  reauthenticateWithCredential,
  // Change Detection
  onAuthStateChanged,
  // Email Verification
  sendEmailVerification,
  // google
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // manage users
  signOut,
  updateProfile,
  deleteUser,

} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  // database
  where,
  limit,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getFirestore,
  setDoc,
  doc,
  collection,
  addDoc
}
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA4VWz9LPUFoNS8roYl7hRlUXADEJH3roA",
  authDomain: "smit-mini-hackathon-4-12-24.firebaseapp.com",
  projectId: "smit-mini-hackathon-4-12-24",
  storageBucket: "smit-mini-hackathon-4-12-24.firebasestorage.app",
  messagingSenderId: "164722399005",
  appId: "1:164722399005:web:0beef19a1587d26ad473f4",
  measurementId: "G-0T1CQLH67C"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export {
  // authenticaion
  createUserWithEmailAndPassword,
  // sigin
  signInWithEmailAndPassword,
  reauthenticateWithCredential,
  // Change Detection
  onAuthStateChanged,
  // Email Verification
  sendEmailVerification,
  // google
  // auth,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // manage users
  signOut,
  updateProfile,
  deleteUser,

  // Database
  where,
  limit,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getFirestore,
  setDoc,
  doc,
  collection,
  addDoc,
  // db
}
