/**
 * var str = "Hello, Nice to meet you"
 * vowels count
 */
var str = "Hello, Nice to meet you";
var vowels = {
    'a': true, 'e': true, 'i': true, 'o': true, 'u': true,
    'A': true, 'E': true, 'I': true, 'O': true, 'U': true
};
var count = 0;
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels[char]) {
        count++;
    }
}
console.log("The total number of vowels in the string =>", str, "<= is", count);