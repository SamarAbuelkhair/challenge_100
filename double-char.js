// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function double_char(str) {
    return str.split("").map((s)=>s.repeat(2)).join("");
   
}
console.log(double_char("Samar"))
