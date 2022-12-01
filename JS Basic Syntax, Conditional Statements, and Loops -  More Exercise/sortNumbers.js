function sortNumbers(num, num2, num3){
    let arr = [num, num2, num3];
    arr.sort((a,b) => b-a);
    console.log(arr.join('\n'));
}

sortNumbers(1,
    2,
    3)