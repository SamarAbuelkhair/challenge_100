// find "needle" in array
function findneedle(arr) {
    // for (i = 0; i < arr.length; i++){
    //     if (arr[i] == "needle") {
    //         return "found the needle at position  : " + (i+1);
    //     }
    // }
    return "found the needle at position  : " + (arr.indexOf("needle")+1);
}
console.log(findneedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));