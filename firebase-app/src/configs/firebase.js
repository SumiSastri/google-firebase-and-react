import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC6ir2uC4hM5iVl5WGx7m5F7pyCbgl4F90",
  // apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "fir-app-f5789.firebaseapp.com",
  projectId: "fir-app-f5789",
  storageBucket: "fir-app-f5789.appspot.com",
  messagingSenderId: "514174577555",
  appId: "1:514174577555:web:7d39eaa08b09d364da9666",
  measurementId: "G-5D2YWH2ELK",
};
console.log(firebaseConfig.apiKey, "check key");
// Initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
