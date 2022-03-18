import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBGQN4C2GBWML6dh-tcbwZS6ppcWnXFIyc",
    authDomain: "linkedin-clone-33842.firebaseapp.com",
    projectId: "linkedin-clone-33842",
    storageBucket: "linkedin-clone-33842.appspot.com",
    messagingSenderId: "309076814253",
    appId: "1:309076814253:web:f053ed36e0a266326ad924"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;