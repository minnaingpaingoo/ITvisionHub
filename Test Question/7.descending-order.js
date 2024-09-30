/**
 * var number = [11,7,6,9,8,8,7,11,3,4,3]
 * Sort the number array with descending order
 */
var number = [11, 7, 6, 9, 8, 8, 7, 11, 3, 4, 3]
for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length; j++) {
        if (number[i] > number[j]) {
            var temp = number[i];
            number[i] = number[j];
            number[j] = temp;
        }
    }
}
console.log("The descending order in array", number);

