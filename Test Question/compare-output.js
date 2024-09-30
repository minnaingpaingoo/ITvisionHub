/**
 * var number = [3, 5, 9, 0, 7, 2, 11, 1, 8, 6];
 * The sum of the pair is 9.
 * Result: (3,6), (9,0),(7,2),(1,8)
 */

var number = [3, 5, 9, 0, 7, 2, 11, 1, 8, 6];
let sum = 9;
let result = [];
let temp = {};
for (let i = 0; i < number.length; i++) {
    let remain = sum - number[i];
    if (temp[remain])
        result.push([remain, number[i]]);
    else
        temp[number[i]] = true;
}
console.log("The result is ", result);
