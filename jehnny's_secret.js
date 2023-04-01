// written a function that returns a greeting for a user
function greeting(name) {
    if (name === "johnny") {
        return "Hello , mylove " + name + "..";
    } else {
        return "Hello , " + name + "..";
    }
}
console.log(greeting("johnny"));
console.log(greeting("Johnny"));
console.log(greeting("johnnny"));
console.log(greeting("ahmed"));