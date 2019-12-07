
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA-p1zXRhGmSsA8ePtZO8Qbb3KVaUNh7TY",
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

const signUpform = document.querySelector('#signUp-form')

signUpform.addEventListener('submit', (e) => {
e.preventDefault();

var useremailSignUp = signUpform.userEmailSignUp.value;
var userpasswordSignUp = signUpform.userPasswordSignUp.value; //User 
var userpasswordConfirmSignUp = signUpform.userPasswordConfirmSignUp.value;



if(userpasswordSignUp === userpasswordConfirmSignUp){
firebase.auth().createUserWithEmailAndPassword(useremailSignUp, userpasswordSignUp)
.then(()=>{
    console.log('Signup successful.');
    
   })
.catch((error)=> {
  alert(error.message)
    console.log(error.code);
    console.log(error.message);
  });
}
else{
  alert("Passwords didnt match")
  console.log("passwords didnt match")
}
});



