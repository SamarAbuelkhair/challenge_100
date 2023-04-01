// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function count_sheep(arr) {
    var count = 0;
    // for (i = 0; i < arr.length; i++) {
    //     if (arr[i]== true) {
    //         count++;
    //     } else {
    //         count = count;
    //     }
    // }
    //another solution 
    arr.map((m) => { if (m == true) count++ });//map increase count 1 when arr == true [(m) the items of array]
    return count;
}
console.log(count_sheep([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));