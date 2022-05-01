// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyDYAV172xi3vGLpWdEE4-HZSpzILG2PP2U",
    authDomain: "furniturehut-4239e.firebaseapp.com",
    projectId: "furniturehut-4239e",
    storageBucket: "furniturehut-4239e.appspot.com",
    messagingSenderId: "218535228343",
    appId: "1:218535228343:web:2bcd88f9974471272f6e32",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;