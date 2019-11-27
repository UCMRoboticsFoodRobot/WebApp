
const currentTable = document.querySelector('#current-order-table')

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


//create element and render login
function renderOrder(doc){

    let tr = document.createElement('tr')
    let price = document.createElement('td');
    let quantity = document.createElement('td');
    let item = document.createElement('td');

    let li = document.createElement('li');

    //sets the data values to variables
    tr.setAttribute('data-id', doc.id);
    

    //adds the li to our loginlist id
    var map;
    var entry
    map = doc.data().Items;

    map.forEach(maps => {
      item = entry.String;
      quantity = entry.Array[0];
      price = ent[1];
      tr.appendChild(item);
      tr.appendChild(quantity);
      tr.appendChild(price);
      currentTable.appendChild(tr);
    })
      
    
    
    
  }
  
      db.collection('OrderSummary').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          renderOrder(doc);
  
        }) 
      })
  
  