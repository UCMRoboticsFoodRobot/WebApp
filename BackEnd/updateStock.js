const form = document.querySelector('#item-list')


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

