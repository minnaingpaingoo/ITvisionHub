/**
 * number = [2,100,4,6,3,9,10,20,40]
 * find max profit or largest number.
 */

var number = [2, 100, 4, 6, 3, 9, 10, 20, 40];
let largest = number[0];
for (let i = 0; i < number.length; i++) {
    if (number[i] > largest) {
        largest = number[i];
    }
}
console.log("The largest number is", largest);