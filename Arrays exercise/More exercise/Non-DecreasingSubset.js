function subset(array){
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let newa = []

    for (let i = 0; i < array.length; i++) {
        let currentNum = Number(array[i]);

        if(currentNum >= biggestNum){
            biggestNum = currentNum;
            newa.push(biggestNum);
        }
        
    }

    console.log(newa.join(" "))

}
subset([ 20, 3, 2, 15, 6, 1])