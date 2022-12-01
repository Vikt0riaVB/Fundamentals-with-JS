function printAndSum(start, end){
    let inline = ""
    let sum = 0;
    for (let index = start; index <= end; index++) {
        inline += index + " ";
        sum += index;
    }
    console.log(inline)
    console.log(`Sum: ${sum}`)
}
