const firebase = require('firebase');
var config = {
  apiKey: "AIzaSyADlbs7t06pbQCi1vtXFyeYSCW25Hg4FTI",
  authDomain: "learnfirebase-dd1dc.firebaseapp.com",
  databaseURL: "https://learnfirebase-dd1dc.firebaseio.com",
  projectId: "learnfirebase-dd1dc",
  storageBucket: "learnfirebase-dd1dc.appspot.com",
  messagingSenderId: "96394441077"
};

firebase.initializeApp(config);

var database = firebase.database();


function writeUserData(userId, name, email) {
  console.log('changes');
  database.ref('users/' + userId).set({
    username: name,
    email: email
  });
}


writeUserData('01','ivan ganteng5','ivanhabi2@gmail.com')
