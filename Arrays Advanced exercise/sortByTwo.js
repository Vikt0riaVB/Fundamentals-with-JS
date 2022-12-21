function sort(input){
    input.sort(sortByTwo);
    input.forEach(element => {
        console.log(element)
    });

    function sortByTwo(current,next){
        if(current.length === next.length){
            return current.localeCompare(next);
        }
        return current.length - next.length
        }
}