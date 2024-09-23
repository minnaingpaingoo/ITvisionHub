/**
 * var input = "Hello, Nice to meet you"
 * vowels count
 */
var input = "Hello, Nice to meet you";
let count_total=0;
let count_a=0;
let count_e=0;
let count_i=0;
let count_o=0;
let count_u=0;
for(let i=0; i<input.length; i++){
    switch(input[i]){
        case 'a': count_a++; count_total++;
        break;
        case 'e': count_e++; count_total++;
        break;
        case 'i': count_i++; count_total++;
        break;
        case 'o': count_o++; count_total++;
        break;
        case 'u': count_u++; count_total++;
        break;
        default: null;
    }
}
console.log("The total number of vowels in the string:",input,"is", count_total);
console.log("The number of a is", count_a);
console.log("The number of e is", count_e);
console.log("The number of i is", count_i);
console.log("The number of o is", count_o);
console.log("The number of u is", count_u);