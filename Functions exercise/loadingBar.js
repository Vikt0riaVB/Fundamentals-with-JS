function loadingBar(num){
    let symbol = '%'.repeat(num/10);
    let dots = '.'.repeat(10 - num / 10);

    if(num === 100){
        console.log(`100% Complete!`);
        console.log(`[${symbol}]`)
    }else{
        console.log(`${num}% [${symbol}${dots}]`)
        console.log(`Still loading...`)
    }
}
