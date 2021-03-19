// Anonymous function
(function (a,b){
    return a + b
})

// Function expression
var sum = function(a,b){
    return a + b
}
var res = sum(5,3);
console.log(res)

var outraSum = sum
console.log(outraSum(5,7))