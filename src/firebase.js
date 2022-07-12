import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBcQ_WEtEBd_iyfVynmV9iP1-i0r6awtcA",
  authDomain: "auth-test-dev-841b7.firebaseapp.com",
  projectId: "auth-test-dev-841b7",
  storageBucket: "auth-test-dev-841b7.appspot.com",
  messagingSenderId: "821701551022",
  appId: "1:821701551022:web:33db1122971a9a7f211e3f"
};

const app = initializeApp(firebaseConfig);

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJ_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })