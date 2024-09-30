/**
 * var number = [11,7,6,9,8,8,7,11,3,4,3]
 * Sort the number array in descending order
 */
var number = [11, 7, 6, 9, 8, 8, 7, 11, 3, 4, 3]
for (let i = 0; i < number.length; i++) {
    if (number[i] < number[i + 1]) {
        let temp = number[i];
        number[i] = number[i + 1];
        number[i + 1] = temp;
        i = -1;
    }
}
console.log("The descending order in array", number);