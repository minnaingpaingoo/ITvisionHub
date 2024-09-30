/**
 * var number = [3, 5, 9, 0, 7, 2, 11, 1, 8, 6];
 * Compare the output 9   
 */
    
function compareOutput() {
    var result = "";
    var number = [3, 5, 9, 0, 7, 2, 11, 1, 8, 6];
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < number.length; j++) {
            var output = number[i] + number[j+1];
            if (output === 9) {
                result += "(" + number[i] + "," + number[j+1] + ") ";
            }
        }
    }
    return result;
}
console.log("The output are:", compareOutput());