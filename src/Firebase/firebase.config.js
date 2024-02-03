// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from  'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2pHYvxgfUYxJvmRMODB3aPbooxthoTVY",
  authDomain: "grupo02-51ba6.firebaseapp.com",
  projectId: "grupo02-51ba6",
  storageBucket: "grupo02-51ba6.appspot.com",
  messagingSenderId: "472384807177",
  appId: "1:472384807177:web:069f20ae26fe74dc4bb3d8",
  measurementId: "G-GWE1J85Y33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);