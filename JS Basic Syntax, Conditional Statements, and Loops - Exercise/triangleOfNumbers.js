function triangleOfNumbers(n){
    let totalNumbersOfRows = n;
    let output = "";
    for (let i = 1; i <= totalNumbersOfRows; i++) {
       for (let j = 1; j <= i ; j++) {
       output += i + " ";
       }
       console.log(output)
       output = "";
    }
}