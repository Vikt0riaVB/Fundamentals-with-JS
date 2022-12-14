function print(arr){
    let NthStep = Number(arr.pop());
    let collection = [];

    for (let i = 0; i < arr.length; i+=NthStep) {
        collection += arr[i] + " ";
    }

    console.log(collection)
}
