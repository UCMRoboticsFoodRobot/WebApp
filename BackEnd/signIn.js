
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA-p1zXRhGmSsA8ePtZO8Qbb3KVaUNh7TY ",
  authDomain: "ucmroboticsfoodrobot.firebaseapp.com",
  databaseURL: "https://ucmroboticsfoodrobot.firebaseio.com",
  projectId: "ucmroboticsfoodrobot",
  storageBucket: "ucmroboticsfoodrobot.appspot.com",
  messagingSenderId: "503157735593",
  appId: "1:503157735593:web:0161305286f5636114e9b8",
  measurementId: "G-1SHQ20SNTN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

//Sign in existing users:
var errorCode=null;
var errorMessage=null;
var incorrectlogins = 0;
const SignInform = document.querySelector('#signIn-form')

SignInform.addEventListener('submit', (e) => {
  e.preventDefault();
var useremailSignIn = SignInform.userEmailSignIn.value;
var userpasswordSignIn = SignInform.userPasswordSignIn.value;//User 
firebase.auth().signInWithEmailAndPassword(useremailSignIn, userpasswordSignIn).catch(function(error) {

  errorCode = error.code;
  errorMessage = error.message;

  if (errorCode != null || errorMessage != null){
    incorrectlogins++;
    // popup box is temporary. Front end team can implement onpage words.
    window.alert("wrong password/email");
  }

  if (incorrectlogins >= 3){
    //Lockout fnc baby form
    console.log("You've been locked out");
  }

  console.log(errorCode);
  console.log(errorMessage);

  // ...
})
});

//Check if user is signed in: 

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
   console.log('Signed In');
    // ...
  } 
  else {
        // User is signed out.
    console.log('signed out'); 
  }
});

function signOut(){
firebase.auth().signOut();

}
