import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAXAgAy9e5ARklWDDVoWs_TABwa3H7QPso",
    authDomain: "discord-clone-5cba7.firebaseapp.com",
    databaseURL: "https://discord-clone-5cba7.firebaseio.com",
    projectId: "discord-clone-5cba7",
    storageBucket: "discord-clone-5cba7.appspot.com",
    messagingSenderId: "938539219763",
    appId: "1:938539219763:web:d8005f1d1cf0752ad91c46"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;