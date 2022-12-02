function lowerToUpper(char){

    let searched = char.charCodeAt();
    if(searched >= 65 && searched <= 90){
        console.log('upper-case')
    }else if(searched >= 97 && searched <= 122){
        console.log('lower-case')
    }

}
