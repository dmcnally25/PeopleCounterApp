
let countEl = document.getElementById("count-el") //.getElementById is a method ('function') attach
//to the object 'document'

console.log(countEl) //.log(countEl) is a method on the object 'console'

let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
    console.log(count);
 }

 function save() {
    console.log(count);
 }
 save();
