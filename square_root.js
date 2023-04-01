// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
//for loop
//if condition
//square number or square roots
function square(arr) {
    // for (i = 0; i < arr.length; i++){
    //     if (Number.isInteger(Math.sqrt(arr[i])) == true) {
    //         arr[i]= Math.sqrt(arr[i]);
    //     } else {
    //         arr[i]= Math.pow(arr[i],2);
    //     }
    // }
    // return arr;
    return arr.map((x) => Number.isInteger(Math.sqrt(x)) == true ? Math.sqrt(x) : Math.pow(x, 2));
}
console.log(square([4, 3, 9, 7, 2, 1]));