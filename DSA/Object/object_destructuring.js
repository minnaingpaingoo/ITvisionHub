const person = {
    name: 'Min Naing Paing Oo',
    age: 24,
    address: {
        street: '446 Naung Bo Su St',
        city: 'Kyaikhto',
        state: 'Mon',
    },
};

//Destructure the object
const {
    name,
    age,
    address: { street, city },
} = person;

console.log(name);
console.log(age);
console.log(city);
console.log(street);

//Renaming
const personObj = {
    firstName: 'Min',
    lastName: 'Naing',
    age: 24,
};

//Renaming while destructuring
const {firstName: first, lastName: last, age: year}= personObj;
console.log(first);
console.log(last);
console.log(year);

//Default Value
const user={
    name1: 'Min Naing',
    age1: 24,
};

const {name1, age1, country='Myanmar'} = user;

console.log(name1);
console.log(age1);
console.log(country);