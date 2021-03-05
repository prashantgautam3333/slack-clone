import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAyiOoCU4QASkD2hijDKwOIHcXQePl4CTw",
  authDomain: "slack-clone-png.firebaseapp.com",
  projectId: "slack-clone-png",
  storageBucket: "slack-clone-png.appspot.com",
  messagingSenderId: "694835041601",
  appId: "1:694835041601:web:5af957dd38fcc18f4cbdc0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth, provider,db};