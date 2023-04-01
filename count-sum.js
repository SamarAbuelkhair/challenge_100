// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
function count_sum(arr) {
    var count = 0;
    var sum = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            count += 1;
        } else if (arr[i] < 0) {
            sum += arr[i];
        }
    }
    return [count,sum];
}
console.log(count_sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));