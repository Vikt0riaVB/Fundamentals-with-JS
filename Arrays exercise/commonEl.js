function common(arr, arr2){
    let common = "";
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr2.length; j++) {
            
            if(arr[i] === arr2[j]){
            common += arr[i] + "\n"
            }
            
        }
        
    }
    console.log(common)
    
}
