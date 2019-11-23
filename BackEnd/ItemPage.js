const itemList = document.querySelector('#item-list')


//create element and render login
function renderItem(doc){

  let li = document.createElement('li');
  let itemname = document.createElement('span');
  let itemprice = document.createElement('span');
  let itemstock = document.createElement('span');
  
  //sets the data values to variables
  
  li.setAttribute('data-id', doc.id);
  itemname = doc.itemName;
  itemprice = doc.itemPrice;
  itemstock = doc.itemStock;

  itemname.textContent = doc.data().itemName;
  itemprice.textContent = doc.data().itemPrice;
  itemstock.textContent = doc.data().itemStock;


  //adds the data to the li
  li.appendChild(itemname + ": $" +  itemprice);
 // li.appendChild(itemprice);

  //adds the li to our loginlist id
  itemList.appendChild(li);
}

//getting data
db.collection('Item').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    if(doc.itemInStock == True){
      renderItem(doc);
    }
  }) 
})


