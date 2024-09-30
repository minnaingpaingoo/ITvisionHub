/**
 * Factorial Program
 * 4!=4*3*2*1=24
 */
let n = 5;
var ans = 1;
if (n === 0 || 1)
    ans = 1;
for (let i = 2; i <= n; i++)
    ans = ans * i;
console.log("The Factorial of", n, "is", ans);

// function factorial(n){
//     var ans = 1;
//     if (n === 0 || 1)
//         return 1;
//     for (let i = 2; i <= n; i++)
//         ans = ans * i;
//     return ans;
// }
// let fact = 5;
// console.log("The Factorial of",fact,"is",factorial(fact));
