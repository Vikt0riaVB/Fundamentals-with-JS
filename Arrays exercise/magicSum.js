function magicSum(arr, num){
    let magicNum = num;
    let current;
    let next;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
       current = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            next = arr[j];
            sum = current + next;
            if(sum === magicNum){
                console.log( `${current} ${next}`)
            }
        }
    }

}
