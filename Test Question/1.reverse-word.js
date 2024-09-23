/**
 * input = "Hello World"
 * output = "dlroW olleH"
 */

var text = "Hello World";
var reversedWords ="";
for (let i = text.length - 1; i >= 0; i--) {
    reversedWords += text[i];
}
console.log("Reverse word of",text, "is:", reversedWords);
