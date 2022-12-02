function sumDigits(number){
    let sum = 0;
    let num = number.toString();

    for (let i = 0; i < num.length; i++) {
        sum = sum + Number(num[i]);
    }
    console.log(sum);
    
}