function sort(array){
    array = array.sort((a,b) => b - a);
    let sorted = [];
    while(array.length > 0){
        let bigger = array.shift();
        sorted.push(bigger);
        let small = array.pop();
        sorted.push(small);
    }

    console.log(sorted.join(" "))
}
