import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBdjdQfPu2O3JPwTfjep3V6ciJzhcJB2KM",
    authDomain: "netflix-clone-d37c4.firebaseapp.com",
    projectId: "netflix-clone-d37c4",
    storageBucket: "netflix-clone-d37c4.appspot.com",
    messagingSenderId: "215784485529",
    appId: "1:215784485529:web:8add41c7df0705b5d5be08"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export  {auth};
  export default db;
  