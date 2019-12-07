var firebaseConfig = {
  apiKey: "p1zXRhGmSsA8ePtZO8Qbb3KVaUNh7TY",
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


const itemList = document.getElementById('item-table')
function renderItem(doc){

  let tr = document.createElement('tr');
  let itemname = document.createElement('td');
  let itemprice = document.createElement('td');
  let itemquantity = document.createElement('td');
  
  //sets the data values to variables
  
  tr.setAttribute('data-id', doc.id);

  itemname.innerHTML = doc.data().name;
  itemprice.innerHTML = doc.data().price;
  itemquantity.innerHTML = doc.data().quantity;


  //adds the data to the li
  tr.append(itemname);
  tr.append(itemquantity);
  tr.append(itemprice);

  itemList.appendChild(tr);


}

ItemName = document.getElementById("itemName")
ItemPrice = document.getElementById("itemPrice")
ItemStock = document.getElementById("itemsInStock")

function alterstock(){

    db.collection('Items').doc().set({
      name: ItemName.value,
      price: parseInt(ItemPrice.value),
      quantity: parseInt(ItemStock.value),

  })
  ItemName.value = '';
  ItemPrice.value = '';
  ItemStock.value = '';

}


//getting data
db.collection('Items').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      renderItem(doc);
  }) 
})