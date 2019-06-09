import * as firebase from 'firebase';
import 'firebase/firestore'

const firestore_events = [];

const firebase_events = () => {
    // alert('Firebase has been Initialized');
    firebase.initializeApp({
        apiKey: "AIzaSyDVSWA8SFuLBgsa19_OGuymWzg4rMopBho",
        authDomain: "uneventu.firebaseapp.com",
        databaseURL: "https://uneventu.firebaseio.com",
        projectId: "uneventu",
        storageBucket: "uneventu.appspot.com",
        messagingSenderId: "252912278461",
        appId: "1:252912278461:web:4b114e7cf14c1a13"
    });

    firebase.firestore().collection('events').get().then(res => {
        res.docs.forEach(doc => {
            firestore_events.push(doc.data())
        });
    });

    return firestore_events;
};

export default firebase_events;