import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDBSbB23alVdPDw4-6A7FSj8egnYUQ_W5M",
    authDomain: "crwn-clothing-db-98f06.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-98f06.firebaseio.com",
    projectId: "crwn-clothing-db-98f06",
    storageBucket: "crwn-clothing-db-98f06.appspot.com",
    messagingSenderId: "319514818690",
    appId: "1:319514818690:web:12113781dbd61533091c9b",
    measurementId: "G-Y7QS59JHCT"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    console.log(userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error(error);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;