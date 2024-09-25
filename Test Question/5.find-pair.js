/**
 * let number = [1,5,4,9,11,24,9,5,33,7,55,66,67,88]
 * Find the number of pair and display the pair.
 */
let number = [1, 5, 4, 9, 11, 24, 9, 5, 33, 7, 55, 66, 67, 1, 7, 4, 88];
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
console.log("Number of pairs is", count);
console.log("The pairs are", resultArr);




// let number = [1, 5, 4, 9, 11, 24, 9, 5, 33, 7, 55, 66, 67, 88];
// let seen = {};
// let resultArr = [];
// let count = 0;
// for (let i = 0; i < number.length; i++) { // i=8; i<14; i++
//     let pointer = number[i]; //pointer = number[8] = 33
//     if (seen[pointer]) { //seen[33]
//         resultArr.push(pointer);
//         count++;
//     }
//     else
//         seen[pointer] = true; //seen=[index1=true, index4=true; index5=true, index9=true, index11=true, index24=true, ]
// }                              //pair=[9,5] , count=2
// console.log("Number of pairs is", count);
// console.log("The pairs number are", pair);
