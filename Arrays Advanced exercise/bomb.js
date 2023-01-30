function bomb(arr, arr1){
   
    let bomb = arr1.shift();
    let power = arr1.shift();

    for (let i = 0; i < arr.length; i++) {

      if(arr[i] === bomb){
        let lowerRange = i - power;
        let bombCount = 1 + (power * 2);

        while(lowerRange < 0){
            lowerRange++;
            bombCount--;
        }

        arr.splice(lowerRange, bombCount);
        i--;
      }

    }
    let result = (a,b) => a + b;
    console.log(arr.reduce(result));
}

bomb([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])