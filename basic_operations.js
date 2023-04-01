// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
//three argument o for operation  v1 for value 1 v2 for value 2
//swich on operation default (it is not a bassic operation)
function basic(operation, value1, value2) {
    // switch (o) {
    //     case "+":
    //         return  v1 + v2;
    //     case "-":
    //         return  v1 - v2;
    //     case "*":
    //         return  v1 * v2;
    //     case "/":
    //         return  v1 / v2;
    // }
    //eval for evaluation 
    return eval(value1 + operation + value2); // build in fun do the basic operation 
}
console.log(basic( "+",10,18));