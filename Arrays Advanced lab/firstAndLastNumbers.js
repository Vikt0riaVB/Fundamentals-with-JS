function firstAndLast(arr){
    let k = Number(arr.shift());
    let result = [];
    let result2 = [];

    for (let i = 0; i < arr.length; i++) {
        result = arr.slice(0,k);
        result2 = arr.slice(-k)
    }
    console.log(result.join(" "))
    console.log(result2.join(" "))
}
firstAndLast([3,
    6, 7, 8, 9])