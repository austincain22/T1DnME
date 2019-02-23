import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAuY3eV2AgbmCGYFDd9KViYc1F44KE3gyU",
    authDomain: "t1dnme-a1012.firebaseapp.com",
    databaseURL: "https://t1dnme-a1012.firebaseio.com",
    projectId: "t1dnme-a1012",
    storageBucket: "t1dnme-a1012.appspot.com",
    messagingSenderId: "907329423038"
};

const fire = firebase.intializeApp(config);

export default fire; // allow other files in the project to be able to access the information.
export const provider = firebase.auth.GoogleAuthProvider();
export const auth = fire.auth();
export const db = fire.firestore();

