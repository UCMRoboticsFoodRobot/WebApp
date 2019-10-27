var randomNum = Math.floor(Math.random() * 20);


var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
var status = ["Order Received", "Processing Order","Delivering", "Delivered"];


function randomString(){
    var length = 8;
    var randomString = '';
    for (var i = 0; i < length; i++){
        randomString += characters[Math.floor(Math.random() * characters.length)]
    }
    return randomString;
}

function randomStatus(){
    var currentStatus = status[Math.floor(Math.random() * 4)];
    return currentStatus;
}
