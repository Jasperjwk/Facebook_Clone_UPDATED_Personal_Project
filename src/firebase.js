import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4KNxdXfqWCEtcsAKO7--loKsKSJKWS4Y",
    authDomain: "facebook-clone-personal-6061d.firebaseapp.com",
    projectId: "facebook-clone-personal-6061d",
    storageBucket: "facebook-clone-personal-6061d.appspot.com",
    messagingSenderId: "519174621420",
    appId: "1:519174621420:web:90935b4643ee7f1c2e3dc9",
    measurementId: "G-YH5WRT7HP7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// This will tell firebase i want the google login service
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
