// Function take an arg and return even or odd
function checknum(num) {
    var str = (num % 2 == 0) ? "even" : "odd";
    document.write(str);
}
var response = prompt("enter your number : ");
var newstr = checknum(response);
document.write(newstr);