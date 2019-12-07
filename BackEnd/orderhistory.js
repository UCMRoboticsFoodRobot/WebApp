
const currentTable = document.getElementById("current-order-table")
const previousTable = document.getElementById("previous-order-table")



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

function loadVars(){
  onClicked = true;
}
     



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
    else{
      myMap = doc.data().Items;
      
      //loops through hashmap and pushes values to table
        for (let i of Object.keys(myMap)) {
          let tr = document.createElement('tr')
          let price = document.createElement('td');
          let quantity = document.createElement('td');
          let item = document.createElement('td');
          let date = document.createElement('td');
          let orderID = document.createElement('td');
          let dateObj = doc.data().time.toDate()
          


          item.innerHTML = i
          arr = myMap[i]
          price.innerHTML = "$ " + arr[0].toFixed(2)
          quantity.innerHTML = arr[1]
          date.innerHTML = (dateObj.getMonth()+1).toString() + "/" + dateObj.getDate().toString()  + "/" +  dateObj.getFullYear().toString()
          orderID.innerHTML = doc.data().OrderId

          tr.append(date);
          tr.append(item);
          tr.append(quantity);
          tr.append(price);
          tr.append(orderID);

          previousTable.appendChild(tr);

        }
    }

   
      
    
    
    
  }
  
  function editOrder(){
    
    if(onClicked){
      onClicked = false;
      button = document.getElementById("editorder")
      button.innerHTML = "Close Edit"
    }
    else{
      onClicked = true;
      button = document.getElementById("editorder")
      button.innerHTML = "Edit Order"
    }
      
  }

  db.collection('OrderSummary').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      renderOrder(doc);
      

    }) 
  })
      