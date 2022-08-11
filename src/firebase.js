// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk7ac14WMgVC_kCTbM8qqpmqv1CWjyNm4",
  authDomain: "filmot-2bf0a.firebaseapp.com",
  projectId: "filmot-2bf0a",
  storageBucket: "filmot-2bf0a.appspot.com",
  messagingSenderId: "164768535787",
  appId: "1:164768535787:web:87a6b31eeaafc80e2d9aae"
};

// Initialize Firebase
 const app =  !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const auth=getAuth();
export {app,auth}