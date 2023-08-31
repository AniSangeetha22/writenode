import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey:`${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId:  `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket:  `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId:  `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId:  `${process.env.REACT_APP_APP_ID}`

  // apiKey: "AIzaSyDtS-qx7uE97JD8rtUwK4F0fsXtq1O7ylA",
  // authDomain: "writenode-c7e6e.firebaseapp.com",
  // projectId: "writenode-c7e6e",
  // storageBucket: "writenode-c7e6e.appspot.com",
  // messagingSenderId: "836246275654",
  // appId: "1:836246275654:web:fd86c050290ae3b4c42c47"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

