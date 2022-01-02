//global function

var name = "global";

function scopeDemo() {
  //var name = "function";
  console.log(name); //global
}

scopeDemo();
console.log(name); //global
// console.log(i); // reference error
