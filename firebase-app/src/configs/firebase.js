import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Note: this config is unique to each project set up in Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6ir2uC4hM5iVl5WGx7m5F7pyCbgl4F90",
  authDomain: "fir-app-f5789.firebaseapp.com",
  projectId: "fir-app-f5789",
  storageBucket: "fir-app-f5789.appspot.com",
  messagingSenderId: "514174577555",
  appId: "1:514174577555:web:7d39eaa08b09d364da9666",
  measurementId: "G-5D2YWH2ELK",
};

// Initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
