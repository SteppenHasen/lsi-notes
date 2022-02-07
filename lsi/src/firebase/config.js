import * as firebase from 'firebase'
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBpdhGGcH_5z7qMLtK85nX9MxijomQR0_U',
  authDomain: 'lsi-notes.firebaseapp.com',
  databaseURL: 'https://lsi-notes-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'lsi-notes',
  storageBucket: 'lsi-notes.appspot.com',
  messagingSenderId: '1061995969313',
  appId: '1:1061995969313:android:727534d6b4028c1b6adc60',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };