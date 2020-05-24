import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCESZ5Eh6h3rwdeuqcNElkDs1iZXGVCwb0",
  authDomain: "crwn-db-22ec2.firebaseapp.com",
  databaseURL: "https://crwn-db-22ec2.firebaseio.com",
  projectId: "crwn-db-22ec2",
  storageBucket: "crwn-db-22ec2.appspot.com",
  messagingSenderId: "250671336420",
  appId: "1:250671336420:web:feb3349f3bf481551555f1",
  measurementId: "G-261W46138N",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
