function carWash(array){
    let all = 0;

    for (let i = 0; i <= array.length; i++) {
        let command = array[i];

        switchCommand(command);
    }

    function switchCommand(command){
        switch (command) {
            case "soap":
                all += 10;
                break;
            case "water":
                all = all * 1.2;
                break;
            case "vacuum cleaner":
                all = all * 1.25;
                break;
            case "mud":
                all = all - (all * 0.10)
                break;
        }
    }
    console.log(`The car is ${all.toFixed(2)}% clean.`)
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])