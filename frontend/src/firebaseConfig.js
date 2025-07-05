// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_GH7mYSixy_SRoBi2tHhIKc_k39OEFOo",
  authDomain: "portifolio-asdesign.firebaseapp.com",
  projectId: "portifolio-asdesign",
  storageBucket: "portifolio-asdesign.firebasestorage.app",
  messagingSenderId: "20909880835",
  appId: "1:20909880835:web:b5f7de737390f4c180c036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
