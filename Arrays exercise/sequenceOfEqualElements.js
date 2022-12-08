function equalElements(arr){
    let newArr = [];
    let current = [];

    for (let i = 0; i < arr.length; i++) {
       current = [];
        for (let j = i; j < arr.length; j++) {
           if(arr[i] === arr[j]){
           current.push(arr[j])
           }else{
            break;
           }
        }

        if(current.length > newArr.length){
            newArr = current;
        }
    }

    console.log(newArr.join(" "))
}
