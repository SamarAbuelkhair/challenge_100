// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
function countby(x, n) {
    let newarr=[];
    for ( i = 1; i <= n; i++){
        newarr[i] = i * x;
    }
    return newarr;
}
console.log(countby(2, 5));