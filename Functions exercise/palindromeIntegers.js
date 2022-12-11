function palindrome(arr){
    let arrFromnNum = arr;

   function isPalindrom(numbers){
    let start = numbers;
    let reverse = Number(numbers.toString().split('').reverse().join(""));
    if(start === reverse){
        return true
    }else{
        return false
    }
   }

   for (let i = 0; i < arrFromnNum.length; i++) {
    let current = arrFromnNum[i];
    console.log(isPalindrom(current));
    
   }
}
palindrome([123,323,421,121])