import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDreFiHuRe-vrdlk-OW2ZYt-UwWZmg16XM",
    authDomain: "nd-app-db.firebaseapp.com",
    databaseURL: "https://nd-app-db.firebaseio.com",
    projectId: "nd-app-db",
    storageBucket: "",
    messagingSenderId: "1062362182474",
    appId: "1:1062362182474:web:5f3c81968bd98c27"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;