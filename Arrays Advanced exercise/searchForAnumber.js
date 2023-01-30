function search(arr, arr1){ 
    let counter = 0;
    let getElements = arr1.shift();
    let deleteNum = arr1.shift();
    let searchedNumber = Number(arr1.shift());
    let nums = arr.slice(0,getElements + 1);
    let modified = nums.splice(deleteNum);
    
    
    modified.filter(el => {
        if(el === searchedNumber){
            counter++ 
        }
    })



    console.log(`Number ${searchedNumber} occurs ${counter} times.`)
}

80/100 