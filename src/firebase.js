import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8mvTHN-KxhHLXWdHQ628Cn1URA2suH-I",
    authDomain: "linkedin-clone-db12c.firebaseapp.com",
    projectId: "linkedin-clone-db12c",
    storageBucket: "linkedin-clone-db12c.appspot.com",
    messagingSenderId: "31420929969",
    appId: "1:31420929969:web:d06ca9cfd63966c9740f90",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;