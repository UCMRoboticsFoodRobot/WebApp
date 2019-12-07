
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
   location.replace("http://127.0.0.1:5500/Frontend/MainPage/main.html") //This need to be fixed to the actual https url later on.. 
    // ...
  } 
  else {
        // User is signed out.
    console.log('Signed out'); 
    alert("Signed out");
  }
});



function signOut(){
firebase.auth().signOut();

}