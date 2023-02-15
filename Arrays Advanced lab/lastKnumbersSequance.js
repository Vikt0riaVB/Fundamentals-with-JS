function sequance(n,k){
    let result = [1];

    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;
        let sum = result.slice(start, start + k).reduce((a, b) => a + b, 0);
        result[current] = sum; 
        
    }
    
    console.log(result.join(" "))
}
sequance(8, 2)
