const itemList = document.querySelector('#item-list')

var firebaseConfig = {
  apiKey: "AIzaSyA-p1XRhGmSsA8ePtZ08Qbb3kVaUNh7TY",
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


//create element and render login
function renderItem(doc){

  let li = document.createElement('li');
  let itemname = document.createElement('span');
  let itemprice = document.createElement('span');
  let itemstock = document.createElement('span');
  
  //sets the data values to variables
  
  li.setAttribute('data-id', doc.id);

  itemname.textContent = doc.data().itemName;
  itemprice.textContent = doc.data().itemPrice;
  itemstock.textContent = doc.data().itemStock;


  //adds the data to the li
  li.appendChild(itemname + ": $" +  itemprice + " : " + itemstock);
 // li.appendChild(itemprice);

  //adds the li to our loginlist id
  itemList.appendChild(li);
}

//getting data
db.collection('Item').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    //if(doc.itemInStock == True){
      renderItem(doc);
    //}
  }) 
})


