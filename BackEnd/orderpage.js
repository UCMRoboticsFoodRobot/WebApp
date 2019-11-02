
//create element and render login
function renderOrder(doc, id){

  let subtotal = document.createElement('span');
  let taxes = document.createElement('span');
  let Total = document.createElement('span');
  let transport = document.createElement('span');
  toString(id);
  
  //sets the data values to variables
  subtotal.textContent = doc.data().subtotal;
  taxes.textContent = (doc.data().taxes*100);
  transport.textContent = doc.data().transport;

  subtotalVal.append(subtotal.textContent);
  taxesVal.append(taxes.textContent);
  transportVal.append(transport.textContent);

  Endtotal = ((1+doc.data().taxes) * doc.data().subtotal) + doc.data().transport;


  db.collection('OrderSummary').doc(id).set({
    total: Endtotal,
  }, {merge: true} )

  Total.textContent = doc.data().total;

  totalVal.append(Total.textContent);
  
}

//getting data
db.collection('OrderSummary').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    let id = doc.id;
    renderOrder(doc, id);

  }) 
})

