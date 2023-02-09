function rotate(arr){
    let rotateNum = Number(arr.pop());
    let index = 0;
    let rotated = []
   
    while(index < rotateNum){
        rotated = arr.pop();
        arr.unshift(rotated);
        

        index++;
    }
    console.log(arr.join(" "))
}
rotate(['1', '2', '3', '4', '2'])