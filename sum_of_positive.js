function sum_of_odd(arr) {
    var sum = 0;
    for (i = 0; i <arr.length; i++){
        if (arr[i] > 0) {
            sum += arr[i];
        } else { sum = sum; }
    }
    return sum;
}
var newarr = [-1, 4, -7, -12];
console.log(sum_of_odd(newarr));
// var myarr = [1, -5, -9, 6, 3];
// console.log(myarr.filter((x) => x < 0).reduce((acc, current) => acc*2+current));

