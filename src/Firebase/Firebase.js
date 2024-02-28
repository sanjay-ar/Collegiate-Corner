import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCrzuDpZDR9RY7LyzYkXHOMRmNWx7OJQgU",
  authDomain: "venues-85fdc.firebaseapp.com",
  databaseURL: "https://venues-85fdc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "venues-85fdc",
  storageBucket: "venues-85fdc.appspot.com",
  messagingSenderId: "638250340301",
  appId: "1:638250340301:web:a77ca250ae1cd2a35b7e84",
  measurementId: "G-4X5GHH079X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
