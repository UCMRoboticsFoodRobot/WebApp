const itemList = document.getElementById('item-list')


const db = firebase.firestore();

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