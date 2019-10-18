

var email="someone@example.com";
var password = "password";

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
  //Error handling
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  
});

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
  //Error handling
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  
});

firebase.auth().signOut().then(function() {
  console.log("Sign-out successful");
}).catch(function(error) {
  console.log("log out error");
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var email = user.email;
    // ...
  } else {
    // User is signed out.
    // ...
    console.log("user signed out");
  }
});

firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log('User Logged Out!');
}).catch(function(error) {
  // An error happened.
  console.log(error);
});