function train(arr){
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let ifAdd = arr[i].split(' ').includes("Add");
        
        if(ifAdd){
            let newWagon = arr[i].split(' ')[1]
            add(newWagon);
        }else{
            let n = Number(arr[i])
            for (let j = 0; j < wagons.length; j++) {
               
                if(wagons[j] + n <= capacity){
                    wagons[j] +=n;
                    break;
                }
                
            }
        }

    }

    function add(el){
        wagons.push(el)
    }
    console.log(wagons.join(" "))
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])