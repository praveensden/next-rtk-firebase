import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCdxGbdzv0DVv5Ui-0tGzaAXiTU4hOOTY",
  authDomain: "next-rtk-fb.firebaseapp.com",
  projectId: "next-rtk-fb",
  storageBucket: "next-rtk-fb.appspot.com",
  messagingSenderId: "260015766106",
  appId: "1:260015766106:web:15821316f056bb9f86b663"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
