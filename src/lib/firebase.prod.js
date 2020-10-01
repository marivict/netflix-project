import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seeDatabase, seedDatabase} from '../seed';

//We need to somehow seed the database


//We need a config here

const config = {
    apiKey: "AIzaSyAxIrNGSmYY1gYONDnM0Zt6QybC8k5lf70",
    authDomain: "netflix-a7ab2.firebaseapp.com",
    databaseURL: "https://netflix-a7ab2.firebaseio.com",
    projectId: "netflix-a7ab2",
    storageBucket: "netflix-a7ab2.appspot.com",
    messagingSenderId: "143795514825",
    appId: "1:143795514825:web:e65044029a8ad67ec40c18"
};

const firebase =  Firebase.initializeApp(config);

seedDatabase(firebase);

export {firebase}
