import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV6LWiU8PJ1g4wo_J9nCzKlCzGtg6vuC8",
  authDomain: "linkedin-clone-bd765.firebaseapp.com",
  projectId: "linkedin-clone-bd765",
  storageBucket: "linkedin-clone-bd765.appspot.com",
  messagingSenderId: "598614335493",
  appId: "1:598614335493:web:e561909ee0a135a5d53c6c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
