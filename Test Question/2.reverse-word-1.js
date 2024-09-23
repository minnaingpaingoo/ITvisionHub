/**
 * Input = "Hello World"
 * Output = "olleH dlroW"
 */

var input ="Hello World";
var output = "";
var word = "";
for (let i = 0; i <= input.length; i++) {
    //If the current character is a space or end of string
    if (input[i] === " " || i === input.length) {
        //reverse the word and add to the output
        output += word.split("").reverse().join("");
        //Add space if not the last word
        if (i !== input.length) {
            output += " ";
        }        
        // Reset the word
        word = "";
    } else {
        word += input[i];
    }
}
console.log(output);
