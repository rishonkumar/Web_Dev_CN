/*function fact(n){
    var ans = 1
    for(var i = 1 ; i<=n ; i++){
        ans = ans*i;
    }
    return ans;
}*/

// using function expersion
var factorial = function fact(n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
};

// using function expersion
//function does not have a name
var factorial2 = function (n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
};
console.log(factorial);
console.log(factorial2);
