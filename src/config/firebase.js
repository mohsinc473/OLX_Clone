import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyDuZaaHRMKiHTbw0raPSwZz6SnaaGAwJWM",
  authDomain: "olx-clone-e0844.firebaseapp.com",
  databaseURL: "https://olx-clone-e0844.firebaseio.com",
  projectId: "olx-clone-e0844",
  storageBucket: "olx-clone-e0844.appspot.com",
  messagingSenderId: "1032095274686",
  appId: "1:1032095274686:web:eab73b490136f21167b0ef",
  measurementId: "G-6R8R7WMBMK",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export default firebase ;
//   firebase.analytics();
