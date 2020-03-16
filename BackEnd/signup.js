const db = firebase.firestore();
const signUpform = document.querySelector('#signUp-form')

var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: 'https://skipair-249fb.web.app/4',
  // This must be true.
  handleCodeInApp: true
};
var form = document.querySelector("form")


form.addEventListener('submit',  (e)=>{
  e.preventDefault();
  console.log("clicked");
  
  var email = document.getElementById("email").value
  var psswd = document.getElementById("password").value

  //creaste the user
  firebase.auth().createUserWithEmailAndPassword(email, psswd)
    .then(function() {
      form.reset();
      
      //get the current user
      var user = firebase.auth().currentUser;
    
      //send a verification email to user and then alert the window
      user.sendEmailVerification().then(function(){
        window.alert("verification sent");
    
      }).catch(function(error) {
    
        console.log(error.message);
      })


    })
    .catch(function(error) {
      // Some error occurred, you can inspect the code: error.code
      console.log(error.message)
    });


  
})

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if(user){
    console.log("verified" + user.emailVerified)
  }
})

function signOut(){
  firebase.auth().signOut().then(function() {
    console.log("sign out")
  }).catch(function(error) {
    // An error happened.
    console.log("error" + error.message)
  });

}
