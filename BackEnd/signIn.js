
const db = firebase.firestore();

//Sign in existing users:

const SignInform = document.querySelector('#signIn-form')

SignInform.addEventListener('submit', (e) => {
  e.preventDefault();
var useremailSignIn = SignInform.userEmailSignIn.value;
var userpasswordSignIn = SignInform.userPasswordSignIn.value;//User 
firebase.auth().signInWithEmailAndPassword(useremailSignIn, userpasswordSignIn).catch(function(error) {
  
  var errorCode = error.code;
  var errorMessage = error.message;
  var len = error.message.length;
  if(len != 0){
    alert("wrong credentials / user doesnt exist");
  }

  // ...
})
});

//Check if user is signed in: 

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
   console.log('Signed In');
   location.replace("../../Frontend/MainPage/main.html") //This need to be fixed to the actual https url later on.. 
    // ...
  } 
  else{
    console.log("signed out");
  }
});


