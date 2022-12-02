function gladiator(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice){

    let total = 0;
    let counterForArmour = 0;

    for (let i = 1; i <= lostFight; i++) {
        

        if(i % 2 === 0){
            total += +helmetPrice;
        }
        if(i % 3 === 0 ){
            total += +swordPrice;
        }
        if(i % 2 === 0   && i % 3 === 0){
            total += +shieldPrice;
            counterForArmour++;

        }
        if(counterForArmour % 2 === 0 && counterForArmour > 0){
            total += +armorPrice;
            counterForArmour = 0;
        }
        
       
       
    }
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`)
}
gladiator(7,
    2,
    3,
    4,
    5)