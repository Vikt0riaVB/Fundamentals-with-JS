function reverseString(string){
    let reversed = Array.from(string);
    let answer = reversed.reverse().join("")
    console.log(answer);
}
reverseString("Hello")
