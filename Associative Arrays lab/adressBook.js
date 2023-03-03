function book(input){
    let array = {};

    for (let line of input) {
        let [name,adress]  = line.split(":");
        array[name] = adress;
    }

    
    let sorted = Object.entries(array);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));
    
    for (let [name, adress] of sorted) {
        console.log(`${name} -> ${adress}`);
      }
        
}
book(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])