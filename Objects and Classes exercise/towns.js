function tow(array){
   

    let townsArr = [];

    for (let i = 0; i < array.length; i++) {
        let [townName,lat,lng] = array[i].split(" | ");
        let townObj = {
            town: townName,
            latitude: Number(lat).toFixed(2),
            longitude: Number(lng).toFixed(2)
        };
        townsArr.push(townObj)

        console.log(townObj)
    }
   
}
