
//create element and render login
function renderOrder(doc, id){

    let subtotal = document.createElement('span');
    let taxes = document.createElement('span');
    let Total = document.createElement('span');
    let transport = document.createElement('span');
    
    
  }
  
  //getting data
  db.collection('OrderSummary').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      renderOrder(doc);
  
    }) 
  })
  
  