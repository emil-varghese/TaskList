import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB3TKdagSMHo3nZ_5CNW-E32rjXqDgJX7o",
  authDomain: "tasklist-1e92a.firebaseapp.com",
  databaseURL: "https://tasklist-1e92a.firebaseio.com",
  storageBucket: "tasklist-1e92a.appspot.com",
  messagingSenderId: "648761793516"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
