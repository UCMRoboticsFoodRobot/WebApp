//st loginList = document.querySelector('#login-list')
const form = document.querySelector('#itemUpdate-form');
const form = document.querySelector('#itemList-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('Item').doc(form.itemName.value).set({
    itemName: form.itemName.value,
    itemPrice: form.itemPrice.value,
    itemStock: form.itemsInStock.value,
})
  form.itemName.value = '';
  form.itemPrice.value = '';
  form.itemsInStock.value = '';
  form.isInStock.value = '';

})

