const products = [
    { name: "product1", price: 500, discountRate: 5 },
    { name: "product2", price: 1000, discountRate: 10 },
    { name: "product3", price: 300, discountRate: 15 },
    { name: "product4", price: 2000, discountRate: 20 },
    { name: "product5", price: 1000, discountRate: 8 },
    { name: "product6", price: 1000, discountRate: 10 },
];

function calculateDiscount(price, discountRate) {
    const discountMap = {};
    const key = `${price}-${discountRate}`;
    if (!discountMap[key]) {
        discountMap[key] = price * discountRate * 0.01;
    }
    return discountMap[key];
}

function getDiscount() {
    return products.map(({ name, price, discountRate }) => {
        const discountPrice = calculateDiscount(price, discountRate);
        return {
            name,
            price,
            discountRate: `${discountRate}%`,
            discountPrice,
            grandPrice: price - discountPrice,
        };
    });
}

console.log(getDiscount());
