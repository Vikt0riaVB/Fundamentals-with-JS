function maxNumber(arr){
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let num1 = Number(arr[i]);
        isMax = true;
        for (let j = i +1; j < arr.length; j++) {
            let num2 = Number(arr[j]);
            if(num1 <= num2){
                isMax = false;
                break;
            }
            
        }

        if(isMax){
            array.push(num1)
        }
    }
    console.log(array.join(" "))
}
