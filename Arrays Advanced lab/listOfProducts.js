function list(arr){
    let sorted = arr.sort((a,b) => {
        if(a < b){
            return -1
        }
        if(a > b){
            return 1 
        }
        return 0; 
    });

    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    
    }
   
}
