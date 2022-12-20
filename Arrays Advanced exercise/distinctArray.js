function distinct(array){
    let repeat = [];
   
    for (const el of array) {

        if(!repeat.includes((el))){
            repeat.push(el);
        }
    }

    console.log(repeat.join(" "))
}
