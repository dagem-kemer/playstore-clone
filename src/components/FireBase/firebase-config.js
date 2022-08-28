import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBxd21OKklpu-ZMaO5B9LRHnrj5VVlwEzc",
  authDomain: "playstore-366e4.firebaseapp.com",
  databaseURL:
    "https://playstore-366e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "playstore-366e4",
  storageBucket: "playstore-366e4.appspot.com",
  messagingSenderId: "707038247192",
  appId: "1:707038247192:web:b675d7296d1c33cd5fc66d",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
