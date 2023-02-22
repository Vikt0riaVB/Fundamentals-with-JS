function pointsValidation(array){
    let x1 = Number(array[0]);
    let y1 = Number(array[1]);
    let x2 = Number(array[2]);
    let y2 = Number(array[3]);
    let fistPoint = calcPoints(array);
    let secondPoint = calcPointsSec(array);
    let thirdPoint = calcPointsThird(array);

    if (fistPoint === Math.trunc(fistPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    if (secondPoint === Math.trunc(secondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (thirdPoint === Math.trunc(thirdPoint)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
    


    function calcPoints() {
        let checkOne = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return checkOne;
    }

    function calcPointsSec(){
        let checkTwo = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return checkTwo;
    }
  
    function calcPointsThird() {
        let checkThree = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        return checkThree;
      }
}
pointsValidation([3, 0, 0, 4])