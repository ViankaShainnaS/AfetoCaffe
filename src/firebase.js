// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyDamLm3nXukImv8Ck-rI_MBqSaZV6b2b4Q" ,
  authDomain: "afetoo-97b3b.firebaseapp.com",
  databaseURL: "https://afeto-3db58-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "afetoo-97b3b",
  storageBucket: "afetoo-97b3b.firebasestorage.app",
  messagingSenderId: "691220455762",
  appId: "1:691220455762:web:df1ce6f0a48884bbfc5a8b",
  measurementId: "G-4WLBZVJ4V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const db=getFirestore(app)
const analytics = getAnalytics(app);
export default app;