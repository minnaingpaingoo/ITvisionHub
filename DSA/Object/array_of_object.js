const products = [
    {id: 1, name: 'Laptop', price: 799, category: 'Electronics'},
    {id: 2, name: 'Phone', price: 499, category: 'Electronics'},
    {id: 3, name: 'T-Shirt', price: 25, category: 'Apparel'},
    {id: 4, name: 'Coffee Maker', price: 89, category: 'Home Appliances'},
];

//Accessing the name of the second product
console.log(products[1].name);

//Looping over the array to display product details
products.forEach((product)=>{
    console.log("Electronics Products are: ");
    console.log(`${product.name} - $${product.price}`);
    console.log("-------------------------------------");
});

//Filter with ES6 function for electronics
const electronics = products.filter(
    (product) => product.category === 'Electronics');

console.log(electronics);

//Map Function : Discount Product for  10%
const discountProducts = products.map((product)=>({
    ...products,
    price: product.price * 0.9, //Apply a 10% Discount
}));

console.log("10% Discount Products are: ");
console.log(discountProducts);
console.log("-------------------------------------");