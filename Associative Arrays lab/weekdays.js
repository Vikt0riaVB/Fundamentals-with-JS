function weekday(input){
    let meetings = {};
    for(let line of input){
        let [weekday,name] = line.split(" ");

        if(meetings.hasOwnProperty(weekday)){
            console.log(`Conflict on ${weekday}!`);
        }else{
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
      }
}
weekday(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])