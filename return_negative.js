// given a number and have to make it negative.
function makeNegative(num) {
    // if (num > 0) {
    //     num = -num;
    // } else if (num < 0) {
    //     num = num;
    // } else {
    //     num = 0;
    // }
    // return num;
    //another solution 
    return num > 0 ? -num : num;
}
console.log(makeNegative(5));
console.log(makeNegative(-1));
console.log(makeNegative(0));