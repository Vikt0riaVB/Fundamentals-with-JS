function login(array){
    let password = array.shift();
    let correctPass = password.split("").reverse().join("");
    counter = 0;
    
    array.forEach(el => {
        
        if(el === correctPass){
            console.log(`User ${password} logged in.`)
 
        }else if(el != correctPass){
            counter++;
         
           if(counter >= 4){
            console.log(`User ${password} blocked!`)
            return
        }
        console.log(`Incorrect password. Try again.`);
        }
       
        
    });
    
}
