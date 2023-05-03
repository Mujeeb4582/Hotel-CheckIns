// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs6X2YqxybmNpYcp-3mm7ScZGHOqyau4o",
  authDomain: "codex-c6496.firebaseapp.com",
  projectId: "codex-c6496",
  storageBucket: "codex-c6496.appspot.com",
  messagingSenderId: "880758132702",
  appId: "1:880758132702:web:c770994cd65bdc0eb6574f",
  measurementId: "G-1VJ127TKXZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
