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

    //adds the data to the li
      
      li.appendChild(name);
      li.appendChild(username);

    //adds the li to our loginlist id
    ul.appendChild(li);
    
    
  }
  
  //getting data
  db.collection('OrderSummary').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      renderOrder(doc);
  
    }) 
  })
  
  