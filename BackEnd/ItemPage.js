const itemList = document.querySelector('#item-list')


//create element and render login
function renderItem(doc){

  let li = document.createElement('li');
  let itemname = document.createElement('span');
  let itemprice = document.createElement('span');
  
  //sets the data values to variables
  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().itemName;
  username.textContent = doc.data().itemPrice;

  //adds the data to the li
  li.appendChild(itemname + ": $" +  itemprice);
 // li.appendChild(itemprice);

  //adds the li to our loginlist id
  itemList.appendChild(li);
}

//getting data
db.collection('Item').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderItem(doc);
  }) 
})


