function nextDay(year,month,day){
    let date = new Date(year, month -= 1, day += 1)
    let newYear = date.getFullYear();
    let newMonth = date.getMonth();
    let newDate = date.getDate();
 
    console.log(`${newYear}-${newMonth + 1}-${newDate}`);
    
}
nextDay(2016, 9, 30)