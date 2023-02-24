function arrayMani(numbers, commands){

    for (let command of commands) {
        let tokens = command.split(" ");
        let currentCommad = tokens[0];
        if(currentCommad === 'add'){
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbers.splice(index, 0, element);
        }else if(currentCommad === 'addMany'){
            let index = Number(tokens[1]);
            tokens.splice(0, 2);
            let numbersToAdd = tokens.map(Number);
            numbers.splice(index, 0, ...numbersToAdd);
        }else if(currentCommad === 'contains'){
            let result = numbers.indexOf(Number(tokens[1]));
            console.log(result);
        }else if(currentCommad === 'remove'){
            let index = Number(tokens[1]);
            numbers.splice(index, 1);
        }else if(currentCommad === 'shift'){
            let position = Number(tokens[1]);
            for(let index = 0; index < position; index++){
                let firstNumber = numbers.shift();
                numbers.push(firstNumber);
            }
        }else if(currentCommad === "sumPairs"){
            let resArr = [];
            if(numbers.length % 2 !== 0){
                numbers.push(0);
            }
            for (let index = 0; index < numbers.length - 1; index+=2) {
                let sum = numbers[index] + numbers[index + 1];
                resArr.push(sum);
                
            }
            numbers = resArr;
        }else if(currentCommad === "print"){
            console.log(`[ ${numbers.join(", ")} ]`);
        }
    }
}

arrayMani([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])

console.log("------");
arrayMani([1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])