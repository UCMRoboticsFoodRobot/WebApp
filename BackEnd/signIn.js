
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



const form = document.querySelector('#signIn-form')

//Sign up new users: 
form.addEventListener('submit', (e) => {
  var useremail = form.userEmail.value;
  var userpassword = form.userPassword.value;
  console.log(useremail)
  e.preventDefault();
firebase.auth().createUserWithEmailAndPassword(useremail, userpassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
})
});


