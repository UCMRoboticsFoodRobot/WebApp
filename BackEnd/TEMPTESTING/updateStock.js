//st loginList = document.querySelector('#login-list')
const form = document.querySelector('#itemUpdate-form');
const form = document.querySelector('#itemList-form');
var user;

//create element and render login
/*function renderLogin(doc){

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
  loginList.appendChild(li);
}

//getting data
db.collection('LoginDetails').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderLogin(doc);
  }) 
})*/
alterStock();


function alterStock(){

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Item').add({
      itemName: form.itemName.value,
      itemPrice: form.itemPrice.value,
      itemStock: form.itemsInStock.value,
  })
    form.itemName.value = '';
    form.itemPrice.value = '';
    form.itemsInStock.value = '';
    form.isInStock.value = '';

  }
}