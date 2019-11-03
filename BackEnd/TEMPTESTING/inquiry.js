/*Goal: 
 1)Retrieve two html fields (email and question) and
 send to the firebase collection.
 2) Immediately send generic automated reply
 back via email through some method. 



 - Use this command for adding stuff to database. Use .delete for removing stuff.
db.collection('Inquiries').add({
    email: [handle for the value]
    question: [handle for the value]


There's 3 levels from firestore basically. Collections(Inquiries/1st column) -> Docs(auto-id/2nd column) -> Data(the info/3rd column)
})

*/   

const forma = document.querySelector('#add-inquiry');


// snapshot is a representation of the entire collection in the database, given by the .get

/*
    //This gets data from database to console/webpage.
    db.collection('Inquiries').get().then((snapshot) => {
        
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
        })
    })
*/

//This gets data from field to database.
//forma.btn.addEventListener('click', addEmai);
forma.btn.addEventListener('click', addEmail);

function addEmail(){
    
    db.collection('Inquiries').add({
       email: forma.email.value,
       question: forma.question.value
    });

    forma.email.value = ''; //Reset fields
    forma.question.value='';
}



