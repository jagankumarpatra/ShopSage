// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const config = {
//   apiKey: "AIzaSyBSvMC-YxEupiq1CIRsMR0KzLuQoWEbU1U",
//   authDomain: "fir-jagan.firebaseapp.com",
//   projectId: "fir-jagan",
//   storageBucket: "fir-jagan.appspot.com",
//   messagingSenderId: "715891136227",
//   appId: "1:715891136227:web:de09b397cfbab8213117d6"
// };

// // Initialize Firebase
// firebase.initializeApp(config);

// export default firebase;




// log in google
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0zlwItwmrkalN4RImA60GMkf4t9OGuYY",
  authDomain: "fir-a296e.firebaseapp.com",
  projectId: "fir-a296e",
  storageBucket: "fir-a296e.appspot.com",
  messagingSenderId: "1073461166736",
  appId: "1:1073461166736:web:5089b2938d718da8e40e15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {auth};