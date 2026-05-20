// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVe5-FzXkaY7O7WrBQifRCWAfkTDtWHkI",
  authDomain: "vyaparx-19ea2.firebaseapp.com",
  projectId: "vyaparx-19ea2",
  storageBucket: "vyaparx-19ea2.firebasestorage.app",
  messagingSenderId: "624382601342",
  appId: "1:624382601342:web:fef6b7c71d875b3ade902f",
  measurementId: "G-MYB09NRX8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);