const company={
    name: 'Tech Corp',
    address: {
        street: '123 Tech Lane',
        city: 'Techville',
        zipCode: '12345',
    },
    employees: [
        {
            name: 'Alice', role: 'Developer',
        },
        {
            name: 'Bob', role: 'Designer',
        }
    ]
};

//Accessing nested object (address)
console.log(company.address.city);
console.log(company.employees[0].name);
console.log(company.employees[1].role);