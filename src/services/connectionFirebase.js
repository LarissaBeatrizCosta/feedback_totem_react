import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: 'AIzaSyC73BNQfyRsHXtIBKEJhydETyVpVKrFLkY',
  authDomain: 'viacred-c0a61.firebaseapp.com',
  databaseURL: 'https://viacred-c0a61-default-rtdb.firebaseio.com',
  projectId: 'viacred-c0a61',
  storageBucket: 'viacred-c0a61.firebasestorage.app',
  messagingSenderId: '148501289740',
  appId: '1:148501289740:web:85a8c485892ed891be4729',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);