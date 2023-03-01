function phonebook(input) {
    let assoc = {};

   for (let  line of input) {
    let tokens  = line.split(" ");
    let name = tokens[0];
    let number = tokens[1];
    assoc[name] = number;
   }
   for (let key in assoc) {
    console.log(`${key} -> ${assoc[key]}`)
   }
    
}
phonebook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])