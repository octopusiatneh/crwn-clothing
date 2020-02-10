import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDgHTm47dkftd6TCeU69MlCrHXrddvsVD4",
  authDomain: "crwn-clothing-d845b.firebaseapp.com",
  databaseURL: "https://crwn-clothing-d845b.firebaseio.com",
  projectId: "crwn-clothing-d845b",
  storageBucket: "crwn-clothing-d845b.appspot.com",
  messagingSenderId: "444921834800",
  appId: "1:444921834800:web:09d60e085d91fda1212cf5",
  measurementId: "G-9EGQPVQWEZ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //check if user logged
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //destruct user data to save
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  //return userRef for needed
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
