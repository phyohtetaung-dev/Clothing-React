import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCdBd4aCBIR_8ASbsRX0Wbr265NMBQgNFk",
    authDomain: "crown-db-ed7c9.firebaseapp.com",
    databaseURL: "https://crown-db-ed7c9.firebaseio.com",
    projectId: "crown-db-ed7c9",
    storageBucket: "crown-db-ed7c9.appspot.com",
    messagingSenderId: "1039397257369",
    appId: "1:1039397257369:web:6d20ba897307289a6db808",
    measurementId: "G-XW610FYVE3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;