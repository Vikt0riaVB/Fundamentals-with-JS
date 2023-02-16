function bitcoinMining(array){
   bitcoin = 11949.16; 
   oneGold = 67.51;
   let boughtBitcoin = 0; 
   let total = 0;
   let day = 0;
   let firstDay = 0;
   let countBitcoin = 0;
   let sumOfBitcoin = 0;
   let totalSum = 0; 

   for (let i = 0; i < array.length; i++) {
    day++;
    
    let element = array[i];
    
    if(day % 3 === 0){
        element *= 0.7;
    }
    total = element * oneGold;
    totalSum += total;

    if(totalSum >= bitcoin){
        countBitcoin++;
        boughtBitcoin = Math.floor(totalSum / bitcoin);
        totalSum = totalSum - (bitcoin * boughtBitcoin);
        sumOfBitcoin += boughtBitcoin;
    }
    if (countBitcoin == 1) {
        firstDay = day;
    }
    
   }
   console.log(`Bought bitcoins: ${sumOfBitcoin}`);
    if (firstDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
 
}


bitcoinMining([3124.15, 504.212, 2511.124])
