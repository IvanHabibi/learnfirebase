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

var listenrefuser = firebase.database().ref('users/');
listenrefuser.on('value', function(snapshot) {
  var userId = '01';
  return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var username = snapshot.val().username;
    console.log(snapshot.val());
  });
});
