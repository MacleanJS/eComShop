// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsNDzg0-iQzNAnU4YqGJwrLlI3q3tatew",
    authDomain: "ecomstore2-63919.firebaseapp.com",
    projectId: "ecomstore2-63919",
    storageBucket: "ecomstore2-63919.appspot.com",
    messagingSenderId: "226245087005",
    appId: "1:226245087005:web:28798b14651aca4be2dbf4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const shoes = getFirestore(app);
export const cart = getFirestore(app);
