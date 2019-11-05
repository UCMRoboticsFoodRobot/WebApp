const currentTable = document.querySelector('#currentOrderTable')


//create element and render login
function renderOrder(doc){

    let total = document.createElement('span');
    let quantity = document.createElement('ul');
    let item = document.createElement('ul');


    let li = document.createElement('li');

    let name = document.createElement('span');
    let username = document.createElement('span');
    
    //sets the data values to variables
    li.setAttribute('data-id', doc.id);
    
    name.textContent = doc.data().name;
    username.textContent = doc.data().username;


    doc.data().Items.forEach(li.appendChild(key))
    //adds the data to the li
    for(doc.data().Items.length){
      li.appendChild(name);
      li.appendChild(username);
    }
    //adds the li to our loginlist id
    ul.appendChild(li);
    
    
  }
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      db.collection('OrderSummary').where(userUID, "==", user.uid).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          renderOrder(doc);
  
        }) 
      })
    } else {
      alert("Please sign in")
    }
  });
  
  