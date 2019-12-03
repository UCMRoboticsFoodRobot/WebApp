
const currentTable = document.getElementById("current-order-table")



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

  //checks if the order has been received
    if(!doc.data().received){
      myMap = doc.data().Items;
      
      //loops through hashmap and pushes values to table
        for (let i of Object.keys(myMap)) {
          let tr = document.createElement('tr')
          let price = document.createElement('td');
          let quantity = document.createElement('td');
          let item = document.createElement('td');
        
          


          item.innerHTML = i
          arr = myMap[i]
          price.innerHTML = "$ " + arr[0].toFixed(2)
          quantity.innerHTML = arr[1]

          tr.append(item);
          tr.append(quantity);
          tr.append(price);
          currentTable.appendChild(tr);

        }
    }

   
      
    
    
    
  }
  
      db.collection('OrderSummary').doc('hSAp2J2w2ou2ngYQ6dAU').get().then(doc => {
          renderOrder(doc);
  
        }) 
    
  
  