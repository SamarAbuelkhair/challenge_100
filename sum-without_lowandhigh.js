// function low(arr) {
//     var min = arr[0];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     arr.splice(arr.indexOf(min), 1);
// }
// function high(arr) {
//     var max = arr[0];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     arr.splice(arr.indexOf(max), 1);
// }
// function sum(arr) {
//     low(arr);
//     high(arr);
//     var sum = 0;
//     for (i = 0; i < arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum;
// }
// console.log(sum([6, 2, 1, 8, 10]));
//another solution
function sum(arr) {
    var min = arr[0];
    var max = arr[0];
    for (i = 0; i < arr.length; i++){
        if (arr[i]<min) {
            min = arr[i];
        }
    }
    for (i = 0; i < arr.length; i++){
        if (arr[i]>max) {
            max = arr[i];
        }
    }
    arr.splice(arr.indexOf(max), 1);
    arr.splice(arr.indexOf(min), 1);
    return arr.reduce((acc,current)=>acc+current);
    
}
console.log(sum([6, 2, 1, 8, 10]));
// var arr = [10, 5, 7, 8, 3];
// console.log(arr.sort(fun));
// function fun(a, b) {
//     return a>b;
// }



























