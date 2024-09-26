/**
 * var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
 * Find 10 in the number array only using with for loop or while loop or do while loop or for each loop
 */
function find(number, findingNumber) {
    let start = 0;
    let end = number.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (number[mid] === findingNumber) return mid;
        if (number[mid] > findingNumber)
            end = mid - 1;
        else 
            start = mid + 1;
    }
    return -1; //If Not Found
}
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let findingNum = 10;
console.log("The Finding Number", findingNum, "is at the index of", find(number, findingNum));