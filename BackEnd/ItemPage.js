//st loginList = document.querySelector('#login-list')
const form = document.querySelector('#item-form')


//create element and render login
function renderItem(doc){

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
db.collection('Item').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderItem(doc);
  }) 
})


