/**
 * var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
 * Find 10 in the number array with for loop, while loop, do while, for each
 */
function find(findingNumber) {
    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    // using for looping. if know the exact time to iterate
    // for (let i = 0; i < number.length; i++) {
    //     if (number[i] === findingNumber) {
    //         return i;
    //     } 
    // }

    // using while looping. if don't know the exact time to iterate
    // let index = 0;
    // while (number.length) {
    //     if (number[index] === findingNumber) {
    //         return index;
    //     }
    // }

    // using for each looping
    let findingIndex = -1;
    number.forEach((element, index) => {
        if(element === findingNumber)
            findingIndex = index; 
    });
    return targetIndex;
}

var findingNumber = 10;
console.log("The finding number", findingNumber, "is at the index of", find(findingNumber));

