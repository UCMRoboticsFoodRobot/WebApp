
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "",
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


//Sign up new users: 
const SignUpform = document.querySelector('#signUp-form')


SignUpform.addEventListener('submit', (e) => {
  var useremail = form.userEmailSignUp.value;
  var userpassword = form.userPasswordSignUp.value;
  console.log(useremail)
  e.preventDefault();
firebase.auth().createUserWithEmailAndPassword(useremail, userpassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
})
});


//Sign in existing users:

const SignInform = document.querySelector('#signIn-form')

SignUpform.addEventListener('submit', (e) => {
var useremail = form.userEmailSignIn.value;
var userPassword = form.userPasswordSignIn.value;
firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {

  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
})
});