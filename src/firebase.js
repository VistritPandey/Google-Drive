import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA05oLi89jPu2JrGf60omQbnVwlmNhGHcA",
  authDomain: "vistrit-drive.firebaseapp.com",
  projectId: "vistrit-drive",
  storageBucket: "vistrit-drive.appspot.com",
  messagingSenderId: "1019721713372",
  appId: "1:1019721713372:web:5be1934ac5668733bd1619",
  measurementId: "G-FY3FPSQ308",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { db, auth, provider, storage };
