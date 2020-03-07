

const db = firebase.firestore();

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



