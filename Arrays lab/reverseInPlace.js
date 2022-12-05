function reverseInPlace(array){
    for (let i = 0; i < array.length / 2; i++) {
        swap(array, i , array.length - 1 - i)
    }
    console.log(array.join(" "));

    function swap(array, i ,j){
        let temp = array[i];
        array[i] = array[j]
        array[j] = temp;
    }
}
