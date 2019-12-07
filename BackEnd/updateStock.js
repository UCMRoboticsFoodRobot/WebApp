const form = document.querySelector('#itemUpdate-form')


form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('Item').doc(form.itemName.value).set({
    itemName: form.itemName.value,
    itemPrice: form.itemPrice.value,
    itemStock: form.itemsInStock.value,
})
  form.itemName.value = '';
  form.itemPrice.value = '';
  form.itemsInStock.value = '';
  form.isInStock.value = '';

})

const itemList = document.getElementById('item-table')

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


//create element and render login
function renderItem(doc){

  let tr = document.createElement('tr');
  let itemname = document.createElement('td');
  let itemprice = document.createElement('td');
  
  //sets the data values to variables
  
  tr.setAttribute('data-id', doc.id);

  itemname.innerHTML = doc.data().name;
  itemprice.innerHTML = doc.data().price;


  //adds the data to the li
  tr.append(itemname);
  tr.append(itemprice);

  itemList.appendChild(tr);


}

//getting data
db.collection('Items').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      renderItem(doc);
  }) 
})