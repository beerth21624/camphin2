import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaJ_QtD_1l5GOJ7TbazS-IRtx1kTNSDUE",
  authDomain: "camphin-f58cf.firebaseapp.com",
  projectId: "camphin-f58cf",
  storageBucket: "camphin-f58cf.appspot.com",
  messagingSenderId: "629646915131",
  appId: "1:629646915131:web:0e5fe60a0082b14d3f4e1e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp