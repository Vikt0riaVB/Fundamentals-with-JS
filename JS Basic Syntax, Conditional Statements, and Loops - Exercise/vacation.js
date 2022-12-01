// 91 from 100 points 
function vacation(group, type, day){
    let total = 0;
    if(type == "Students"){
        if(day == "Friday"){
            total = 8.45 * group;
            if(group >= 30){
                total = (8.45 * group) * 0.85;
            }
        }else if(day == "Saturday"){
            total = 9.80 * group;
            
            if(group >= 30){
                total = (9.80 * group) * 0.85;
            }
        }else if(day == "Sunday"){
            total = 10.46 * group;
          
            if(group >= 30){
                total = (10.46 * group) * 0.85;
            }
        }
        console.log(`Total price: ${total.toFixed(2)}`)
    }else if(type == "Business"){
        if(day == "Friday"){
            total = 10.90 * group;
            
            if(group >= 100){
                group -= 10;
                total = (10.90 * group) * 0.85;
              
            }
        }else if(day == "Saturday"){
            total = 15.60 * group;
            
            if(group >= 100){
                group -= 10;
                total = (15.60 * group) * 0.85;
               
            }
        }else if(day == "Sunday"){
            total = 16 * group;
            
            if(group >= 100){
                group -= 10 
                total = (16* group) * 0.85;
               
            }
        }
        console.log(`Total price: ${total.toFixed(2)}`)
    }else if(type == "Regular"){
        if(day == "Friday"){
            total = 15 * group;
           
            if(group >= 10 && group <= 20){
                total = (15 * group) * 0.95;
                
            }
        }else if(day == "Saturday"){
            total = 20 * group;
            
            if(group >= 10 && group <= 20){
                total = (20 * group) * 0.95;
                
            }
        }else if(day == "Sunday"){
            total = 22.50 * group;
            
            if(group >= 10 && group <= 20){
                total = (22.50 * group) * 0.95;
                
            }
        }

        console.log(`Total price: ${total.toFixed(2)}`)
    }

}
