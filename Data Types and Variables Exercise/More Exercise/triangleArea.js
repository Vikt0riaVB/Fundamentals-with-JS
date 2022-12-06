function area(a,b,c){
    let s = (a + b + c)/2;

    let trArea = Math.sqrt(s *(s-a) *(s-b) *(s-c))
    
    console.log(trArea)
}
area(2,
    3.5,
    4)
