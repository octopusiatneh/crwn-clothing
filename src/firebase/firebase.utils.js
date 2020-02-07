import firebase from "firebase/app";

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
