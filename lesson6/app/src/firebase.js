// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",//ваши данные из консоли firebase
  authDomain: "",//ваши данные из консоли firebase
  projectId: "",//ваши данные из консоли firebase
  storageBucket: "",//ваши данные из консоли firebase
  messagingSenderId: "",//ваши данные из консоли firebase
  appId: "",//ваши данные из консоли firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}