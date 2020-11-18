import firebase from 'firebase'
import { firebaseconfig } from './firebaseconfig';

const firebaseConfig = firebaseconfig

// const firebaseConfig = {
//     Firebase Settings
// }


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;