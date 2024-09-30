/**
 * number = [2,100,4,6,3,9,10,20,40]
 * max number - min number
 */

var number = [2, 100, 4, 6, 3, 9, 10, 20, 40];
let largest = number[0];
let smallest = number[0];
for (let i = 0; i < number.length; i++) {
    if (number[i] > largest)
        largest = number[i];
    else if (number[i] < smallest)
        smallest = number[i];
}
let diff = largest - smallest;
console.log("The difference of max number and min number is", diff);