/**
 * var number = [1,5,8,65,89,6,23,67,7,90,12,100]
 * Find 7 with short period time.
 * Find 7 is exist or not in the array
 */

function binarySearch(arr, findingNumber, low, high) {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === findingNumber)
        return mid;
    if (arr[mid] > findingNumber)
        return binarySearch(arr, findingNumber, low, mid - 1);
    else
        return binarySearch(arr, findingNumber, mid + 1, high);
}
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("The finding number 10 is at the index of", binarySearch(number, 14, 0, number.length - 1));
