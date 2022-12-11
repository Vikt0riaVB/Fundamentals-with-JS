function oddAndEven(n){
    let sumEven = 0;
    let sumOdd = 0;
    number =  String(n).split('');

    for (let i = 0; i < number.length; i++) {
        
        if(number[i] % 2 === 0){
            sumEven += Number(number[i]);
        }else{
            sumOdd += Number(number[i]);
        }
    }

    
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}
