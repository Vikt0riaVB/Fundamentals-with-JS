function party(guests){
    let party = [];

   for (const guest of guests) {
    let line = guest.split(" ");
    let person = line[0];
    if(line.length === 3){
        let isGoing = party.includes(person);
        if(isGoing){
            console.log(`${person} is already in the list!`);
        }else{ 
            party.push(person)
        }
    }else{
        let indexOfPerson = party.indexOf(person);
        if(indexOfPerson !== -1){
            party.splice(indexOfPerson, 1);
        }else{ 
            console.log(`${person} is not in the list!`);
        }
    }
   }
    

    console.log(party.join("\n"))

}
party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])