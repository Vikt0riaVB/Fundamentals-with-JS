function sumFirstAndLast(arr){
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    let result = 0;

    result = first + last;
    console.log(result)
}