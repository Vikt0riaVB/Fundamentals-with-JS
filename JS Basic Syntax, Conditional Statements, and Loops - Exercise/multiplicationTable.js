function multiplicationTable(number){
    let result = ""
    for (let i = 1; i <= 10 ; i++){
        result = i * number
      
        console.log(`${number} X ${i} = ${result}`);
    }
}
