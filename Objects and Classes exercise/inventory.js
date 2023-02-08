function inventory(arr){
    let heroes = [];
    
    for(let element of arr){
        element = element.split(' / ');
        
        let heroName = element.shift();
        let level = element.shift();
        let items = element.join('').split(', ');
        
        let hero = {
            name : heroName,
            level : Number(level),
            items : items
        }
        
        heroes.push(hero);
        heroes.sort((a, b) => a.level - b.level)
    }
    
   
    
    for(let hero of heroes){
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`);
    }
    
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])

console.log("------------")

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ])