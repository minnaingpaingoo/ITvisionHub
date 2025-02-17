const library = {
    name: 'National Library',
    location:{
        city: 'Yangon',
        township: 'Pabedan',
        address: 'Merchant Road',
    },
    books:[
        {
            title: 'JavaScript for Begineers',
            author: 'John Doe',
            year: 2020,
            genres: ['Programming', 'Web Development'],
        },
        {
            title: 'Advanced JavaScript',
            author: 'Jane Smith',
            year: 2022,
            genres: ['Programming', 'Advanced'],
        }
    ],
};

//Using forEach

library.books.forEach((book)=>{
    console.log(book.title);
    console.log(book.author);
});

//Using for loop by key
for(const key in library.location){
    console.log(key, library.location[key]);
}

//Destructuring the object
const {name, location, books} = library;
console.log(name);
console.log(location.city);

//Destructuring nested objects
const {city, township} = library.location;
console.log(city);
console.log(township);