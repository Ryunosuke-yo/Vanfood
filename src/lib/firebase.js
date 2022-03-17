import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
 
const firebaseConfig = {
    apiKey: "AIzaSyAhma3iaDDPMrSRyNJLmcpm9doN1d8vGFI",
    authDomain: "vanfood-9f7cf.firebaseapp.com",
    projectId: "vanfood-9f7cf",
    storageBucket: "vanfood-9f7cf.appspot.com",
    messagingSenderId: "63064952375",
    appId: "1:63064952375:web:5670784c415b3f4974f9b2",
    measurementId: "G-79LDNGGLK1"
  };


  export const initFirebase = initializeApp(firebaseConfig)
  export const authFirebase = getAuth()

