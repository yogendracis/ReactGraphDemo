// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, child, orderByChild, equalTo, get, query } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCOr3nuKj-lJnf5Z7BfypcllF-j5GK8kE4",
    authDomain: "teta-career-portal-testingdb.firebaseapp.com",
    databaseURL: "https://teta-career-portal-testingdb-default-rtdb.firebaseio.com",
    projectId: "teta-career-portal-testingdb",
    storageBucket: "teta-career-portal-testingdb.appspot.com",
    messagingSenderId: "896592933036",
    appId: "1:896592933036:web:5eaecc03c1d4bad4bd6f09"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue, child, orderByChild, equalTo, get, query };
