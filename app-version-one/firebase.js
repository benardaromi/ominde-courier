
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB0INO8KEeHrqA05djK5X5t5wbaO7PX_uA",
  authDomain: "ominde-courier.firebaseapp.com",
  projectId: "ominde-courier",
  storageBucket: "ominde-courier.appspot.com",
  messagingSenderId: "461161304449",
  appId: "1:461161304449:web:d8e507eae2d1ed79055880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
