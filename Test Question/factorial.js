/**
 * Factorial Program
 * 4!=4*3*2*1=24
 */

function getFactorial(number) {
    if (number === 0 || 1) 
        return 1;
    let ans = 1;
    for (let i = 1; i <= number; i++) 
        ans = i * ans;
    return ans;
}
console.log("The Factorial of 4 is",getFactorial(4));