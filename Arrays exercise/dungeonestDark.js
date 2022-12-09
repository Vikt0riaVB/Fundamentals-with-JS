function dark(arr) {
    let initHealth = 100;
    let coins = 0;
    let initCoins = 0;
    let dungen = arr[0].split("|");
    let room = 0;


    for (let i = 0; i < dungen.length; i++) {
        let current = dungen[i].split(" ");
        let command = current[0];
        let num = Number(current[1]);
        room++;


        if (command === "potion") {

            if (initHealth + num > 100) {
                num = 100 - initHealth;
                initHealth = 100;
            } else {
                initHealth += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${initHealth} hp.`);


        } else if (command === "chest") {
            coins = Number(num)
            initCoins += Number(num);
            console.log(`You found ${coins} coins.`);


        } else {
            initHealth -= Number(num);
            if (initHealth > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                return;
            }
        }


    }
    console.log("You've made it!");
    console.log(`Coins: ${initCoins}`);
    console.log(`Health: ${initHealth}`);


}
dark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])