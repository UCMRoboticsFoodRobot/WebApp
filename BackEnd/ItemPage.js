const itemList = document.getElementById('item-list')

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


//create element and render login
function renderItem(doc){

  let tr = document.createElement('tr');
  let itemname = document.createElement('td');
  let itemprice = document.createElement('td');
  
  //sets the data values to variables
  
  tr.setAttribute('data-id', doc.id);

  itemname.innerHTML = doc.data().itemName;
  itemprice.innerHTML = doc.data().itemPrice;


  //adds the data to the li
  tr.append(itemname);
  tr.append(itemprice);

  itemList.appendChild(tr);


  //adds the tr to our table id
  itemList.appendChild(tr);
}

//getting data
db.collection('Item').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      renderItem(doc);
  }) 
})