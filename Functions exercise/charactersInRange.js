function charInRange(ch1,ch2){
  let start = Math.min(ch1.charCodeAt(0),ch2.charCodeAt(0));
  let end = Math.max(ch1.charCodeAt(0),ch2.charCodeAt(0));
  let answer = [];
    

    for (let i = start + 1; i < end; i++) {
        answer.push(String.fromCharCode(i))
    }
    
    console.log(answer.join(" "))
}
