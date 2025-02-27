// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs
// for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeD7mxUd6O3RAi6Uv2H63snbiekgOMVWQ",
  authDomain: "codepen-like-clone.firebaseapp.com",
  projectId: "codepen-like-clone",
  storageBucket: "codepen-like-clone.firebasestorage.app",
  messagingSenderId: "461256218861",
  appId: "1:461256218861:web:156cd0ee168874b52c54e4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);


//todo : write a code to initialise specific service based on your requirement

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

