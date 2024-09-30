/**
 * number = [1,2,4,5,8,11,15]
 * find the missing number
 */

var number = [1, 2, 4, 5, 8, 11, 15];
let n = number[number.length - 1]; //Last element in an array
let missing = [];
let j = 0; //Pointer for the number array
for (let i = number[0]; i < n; i++) {
   if (i === number[j])
      j++;
   else
      missing.push(i);
}
console.log("The missing numbers in an array are", missing);