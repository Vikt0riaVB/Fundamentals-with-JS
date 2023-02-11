function tseamAccount(array){
    let installedGames = array.shift().split(" ");

   for (let i = 0; i < array.length; i++) {
    let current = array[i].split(" ");
    let currentCommand = current[0];
    let game = current[1];

    switch (currentCommand) {
        case "Install":
            if(!installedGames.includes(game)){
                installedGames.push(game);
            }        
            break;
        case "Uninstall":
            if(installedGames.includes(game)){
                let index = installedGames.indexOf(game);
                installedGames.splice(index,1)
            }     
            break;
        case "Update":
            if(installedGames.includes(game)){
                let index = installedGames.indexOf(game);
                let temp = installedGames.splice(index,1);
                installedGames.push(temp.join(" ")); 
            }        
            break;
        case "Expansion":
            let exp = game.split("-");
            let curG = exp[0];
            if(installedGames.includes(curG)){
                let expa = exp.join(":")
                let index = installedGames.indexOf(curG)
                installedGames.splice(index + 1,0,`${expa}`)
            }
            break;
        case "Play!":
            console.log(installedGames.join(" "))
    }
   }
}
tseamAccount(['CS WoW Diablo',

'Install LoL',

'Uninstall WoW',

'Update Diablo',

'Expansion CS-Go',

'Play!'])