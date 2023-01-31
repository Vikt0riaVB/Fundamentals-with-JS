function solve(array){
    
   for (let i = 0; i < array.length; i++) {
   let personData = array[i];
   let personalNumber = personData.length;

   console.log(`Name: ${personData} -- Personal Number: ${personalNumber}`)
   }

}
solve([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])