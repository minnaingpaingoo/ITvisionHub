const company={
    name: "ABC Co., Ltd.",
    location:{
        street: "Bosonpat St.",
        township: "Pabedan",
        city: "Yangon"
    },
    employees:[
        {
            name: "Employee1",
            project: [
                {
                    projectName: "Project1", 
                    projectDesc: "Flutter Project",
                },
                {
                    projectName: "Project2", 
                    projectDesc: "Java Project",
                }
            ]
        },
        {
            name: "Employee2",
            project: [
                {
                    projectName: "Project3", 
                    projectDesc: "Laravel Project",
                },
                {
                    projectName: "Project4", 
                    projectDesc: "Node.js Project",
                }
            ]
        }
    ],
};

console.log("All of employees in the company are: ");
company.employees.forEach((employee)=>{
    console.log(employee);
})
console.log("---------------------------------------");

company.employees.forEach((employee) => {
    console.log(`These are ${employee.name}'s projects:`);

employee.project.forEach((proj) => {
        console.log(`  - ${proj.projectName}: ${proj.projectDesc}`);
    });
});
console.log("---------------------------------------");

// Swap Employee1 and Employee2's projects
const employee1 = company.employees[0];
const employee2 = company.employees[1];

[employee1.project, employee2.project] = [employee2.project, employee1.project];

company.employees.forEach((employee) => {
    console.log(`These are ${employee.name}'s projects:`);

employee.project.forEach((proj) => {
        console.log(`  - ${proj.projectName}: ${proj.projectDesc}`);
    });
});
console.log("---------------------------------------");


