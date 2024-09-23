/**
 * var number = [1,5,4,6,7,9,21,24]
 * Divided by 3
 * Output = [6,9,21,24]
 */
    
var number = [1, 5, 4, 6, 7, 9, 21, 24];
var output = [];
for (let i = 0; i < number.length; i++) {
    if (number[i] % 3 === 0) {
        output.push(number[i]);
    }
}
console.log("The number divided by 3 in an array:", output);