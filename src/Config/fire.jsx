import firebase from "firebase";

const config ={
    apiKey: "AIzaSyAuY3eV2AgbmCGYFDd9KViYc1F44KE3gyU",
    authDomain: "t1dnme-a1012.firebaseapp.com",
    databaseURL: "https://t1dnme-a1012.firebaseio.com",
    projectId: "t1dnme-a1012",
    storageBucket: "t1dnme-a1012.appspot.com",
    messagingSenderId: "907329423038"
};

firebase.intializeApp(config);

export default firestore;
