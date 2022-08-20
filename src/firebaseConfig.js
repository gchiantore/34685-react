// Import the functions you need from the SDKs you need
import { dblClick } from "@testing-library/user-event/dist/click";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADk2NnYQe_dmEsrDzTvEq3UX9jqlWJDkQ",
    authDomain: "fluid-38371.firebaseapp.com",
    projectId: "fluid-38371",
    storageBucket: "fluid-38371.appspot.com",
    messagingSenderId: "937381361374",
    appId: "1:937381361374:web:bd638a3d035a8a889ab44f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);
export default db;