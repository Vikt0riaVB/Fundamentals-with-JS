 function division(num){
    let division = 0;

    if(num % 10 === 0){
        division = 10 
    }else if(num % 7 === 0){
        division = 7 
    }else if(num % 6 === 0){
        division = 6 
    }else if(num % 3 === 0){
        division = 3
    }else if(num % 2 === 0){
        division = 2 
    }

    if (division > 0) {
        console.log(`The number is divisible by ${division}`);
    } else {
        console.log("Not divisible")
    }
 }

