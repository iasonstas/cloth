import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyAtE7jllvC8s8eXwA_F7A90doQjFWySGRg",
  authDomain: "crwn-db-1f307.firebaseapp.com",
  databaseURL: "https://crwn-db-1f307.firebaseio.com",
  projectId: "crwn-db-1f307",
  storageBucket: "",
  messagingSenderId: "238046118807",
  appId: "1:238046118807:web:3f0862e2652c6cb7e9bad2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // Query
  const userRef = firestore.doc(`users/${userAuth.uid}`);
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
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  //   USER REF
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
