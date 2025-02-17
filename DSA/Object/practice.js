const library={
    name: "National Library",
    location: {
        street: "Merchant St",
        township: "Pabedan",
        city: "Yangon",
    },
    books:[
        {
            name:"PHP for Basic",
            author: "John",
            year: 2020,
        },
        {
            name:"Dart",
            author: "Adam",
            year: 2021,
        },
    ],
};

library.books.forEach((book) => {
    console.log("All of the book information are:")
    console.log(book);
    console.log("-----------------------------------");
});

//Destructure the object

const{street, township, city}=library.location;
console.log("Library Location");
console.log(`Street: ${street}`);
console.log(`Township: ${township}`);
console.log(`City: ${city}`);
console.log("-----------------------------------");

//Rename the key in location while the destructuring the object
const{township: currentTownship, city:currentCity }=library.location;
console.log("-------Library Location----------");
console.log(`Township: ${currentTownship}`);
console.log(`City: ${currentCity}`);
console.log("-----------------------------------");

//Add the postal code
const{postalCode = "12345"}=library.location;
console.log("-------Library Postal Code----------");
console.log(`Postal Code: ${postalCode}`);
console.log("-----------------------------------");

//Print all of the object key from the library
console.log("Object keys are:")
console.log(Object.keys(library));
console.log("-----------------------------------");

//Print all of the object values
console.log("Object values are:")
console.log(Object.values(library));
console.log("-----------------------------------");

//Copy the library object
const libraryCopy = {...library};
console.log("Copy of Library");
console.log(libraryCopy);
console.log("-----------------------------------");

//Combine two object
const user ={name: "Min Naing", age: 25};
const address={street: "Aung Chan Thar St.", township: "Kamaryut"};
const combineObj ={user, address};
console.log("Combine two objects:");
console.log(combineObj);
console.log("-----------------------------------");