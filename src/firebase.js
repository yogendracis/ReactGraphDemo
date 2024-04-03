// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, child, orderByChild, equalTo, get, query } from 'firebase/database';

const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue, child, orderByChild, equalTo, get, query };
