function rightPlace(string, char, string1){
let res = string.replace("_", char);
let output = ""
if(res === string1){
    output = "Matched";
    console.log(output)  
}else{
    output = "Not Matched"
    console.log(output)
}
}

