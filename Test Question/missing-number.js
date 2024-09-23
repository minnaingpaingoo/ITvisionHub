/**
 * number = [1,2,4,5,8,11,15]
 * find the missing number
 */

var number = [1, 2, 4, 5, 8, 11, 15];
let count = number[number.length - 1];
let missing = [];
for (let i = 1; i < count; i++) {   
   if(number.indexOf(i) == -1){
    missing.push(i);
   }
}
console.log("The missing number in an array is", missing);