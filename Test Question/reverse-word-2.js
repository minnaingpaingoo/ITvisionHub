/*  Input = "Hello Word"
    Output = "World Hello"
*/

const inputString = "Hello World";

const words = inputString.split(" "); // words = ['Hello', 'World'] ; word.length = 2 

let reversedWords = [];

for (let i = words.length - 1; i >= 0; i--) {
  reversedWords.push(words[i]);
}

const outputString = reversedWords.join(" ");

console.log(outputString);
