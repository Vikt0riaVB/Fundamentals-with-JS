function order(product, quantity) {
    let sum = 0;
    switch (product) {
        case "coffee":
            sum = quantity * 1.50;
            console.log(sum.toFixed(2));
            break;
        case "water":
            sum = quantity * 1.00;
            console.log(sum.toFixed(2));
            break;
        case "coke":
            sum = quantity * 1.40;
            console.log(sum.toFixed(2));
            break;
        case "snacks":
            sum = quantity * 2.00;
            console.log(sum.toFixed(2));
            break;
       
    }

}
order("water", 5)