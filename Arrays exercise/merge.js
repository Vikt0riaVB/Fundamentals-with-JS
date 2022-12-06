function merge(arr, arr2) {
    let arrMerge = [];


    for (let j = 0; j < arr.length; j++) {

        if (j % 2 === 0) {
            arrMerge.push(Number(arr[j]) + Number(arr2[j]));
        }else {
            arrMerge.push(`${arr[j]}${arr2[j]}`)
        }

    }

    console.log(arrMerge.join(" - "))

}
merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])