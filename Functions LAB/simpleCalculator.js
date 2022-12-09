function simple(num, num2, operator) {
    switch (operator) {
        case "multiply":
            console.log(num * num2)
            break;
        case "divide":
            console.log(num / num2)
            break;
        case "add":
            console.log(num + num2)
            break;
        case "subtract":
            console.log(num - num2)
            break;

    }
}
simple(5,
    5,
    'multiply')