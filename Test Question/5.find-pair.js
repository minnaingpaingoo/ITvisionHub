/**
 * let number = [1,5,4,9,11,24,9,5,33,7,55,66,67,88]
 * Find the number of same number pairs in an array and display the pairs.
 * Result:  Number of pairs = 2
 *          The pairs are [5,5],[9,9]
 */
let number = [1, 5, 4, 9, 11, 24, 9, 5, 33, 7, 55, 66, 67, 88];
let count = 0;
let resultArr = [];
for (i = 0; i < number.length; i++) {
    for (j = i + 1; j < number.length; j++) {
        if (number[i] === number[j]) {
            resultArr.push([number[i], number[j]]);
            count++;
            break;
        }
    }
}
console.log("Number of pairs =", count);
console.log("The pairs are", resultArr);




// let number = [1, 5, 4, 9, 11, 24, 9, 5, 33, 7, 55, 66, 67, 88];
// let seen = {};
// let resultArr = [];
// let count = 0;
// for (let i = 0; i < number.length; i++) {
//     let pointer = number[i];
//     if (seen[pointer]) {
//         resultArr.push(pointer);
//         count++;
//     }
//     else
//         seen[pointer] = true; 
// }                           
// console.log("Number of pairs =", count);
// console.log("The pairs number are", pair);
