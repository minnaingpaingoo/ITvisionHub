class Company{
    constructor (name, location, employees){
        this._name = name;
        this._location = location;
        this._employees = employees;
    }

    // Getters
    get name() {
        return this._name;
    }

    get location() {
        return this._location;
    }

    get employees() {
        return this._employees;
    }

    // Setters
    set name(newName) {
        this._name = newName;
    }

    set location(newLocation) {
        this._location = newLocation;
    }

    set employees(newEmployees) {
        this._employees = newEmployees;
    }

     // Add a project to an employee 
     addProject(employeeName, project) {
        const employee = this._employees.find(emp => emp.name === employeeName);
        if (employee) {
            employee.projects.push(project);
        } else {
            console.log(`Employee ${employeeName} not found.`);
        }
    }

    // Delete a project from the employee
    deleteProject(employeeName, projectName) {
        const employee = this._employees.find(emp => emp.name === employeeName);
        if (employee) {
            const project = employee.projects.find(proj => proj.projectName == projectName);
            if(project){
                employee.projects = employee.projects.filter(proj => proj.projectName !== projectName);
            }else{
                console.log(`Employee: ${employeeName}'s ${projectName} not found.`);
            }        
        } else {
            console.log(`Employee: ${employeeName} not found.`);
        }
    }

    // Update a project for an employee
    updateProject(employeeName, projectName, newProject) {
        const employee = this._employees.find(emp => emp.name === employeeName);
        if (employee) {
            const projectIndex = employee.projects.findIndex(proj => proj.projectName === projectName);
            if (projectIndex !== -1) {
                employee.projects[projectIndex] = newProject;
            } else {
                console.log(`Project: ${projectName} not found for ${employeeName}.`);
            }
        } else {
            console.log(`Employee: ${employeeName} not found.`);
        }
    }

}

function displayEachEmpProject(){
    company.employees.forEach((employee) => {
        console.log(`These are ${employee.name}'s projects:`);
    
        employee.projects.forEach((proj) => {
            console.log(`  - ${proj.projectName}: ${proj.projectDesc}`);
        });
    });
    console.log("---------------------------------------");
}

const company = new Company(
    "ABC Co., Ltd.",
    { street: "Bosonpat St.", township: "Pabedan", city: "Yangon" },
    [
        {
            name: "Employee1",
            projects: [
                { projectName: "Project1", projectDesc: "Flutter Project" },
                { projectName: "Project2", projectDesc: "Java Project" }
            ],
            salary: 500,
        },
        {
            name: "Employee2",
            projects: [
                { projectName: "Project3", projectDesc: "Laravel Project" },
                { projectName: "Project4", projectDesc: "Node.js Project" }
            ],
            salary: 450,
        }
    ]
);

//Add new project to Employee1
company.addProject("Employee1", {projectName: "Project5", projectDesc:"PHP Project"});
console.log("After Adding new project to Employee1, the result is:")
displayEachEmpProject();

//Delete Project4 from Employee2
company.deleteProject("Employee2", "Project4");
console.log("After deleting Project4 from Employee2, the result is:")
displayEachEmpProject();

//Update Employee1 Project1
company.updateProject("Employee1","Project1", { projectName: "Project6", projectDesc: "Updated Flutter Project" })
console.log("After updating Project1 from Employee1, the result is:")
displayEachEmpProject();

