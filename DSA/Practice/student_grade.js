let students = [
    { name: 'Alic', grades: [85, 78, 92, 88] },
    { name: 'Bob', grades: [45, 58, 60, 48] },
    { name: 'Charlie', grades: [95, 99, 100, 93] },
    { name: 'David', grades: [30, 40, 40, 15] },
];

let passStudent = [];
let failStudent = [];

students.forEach(student => {
    let avgMark = student.grades.reduce((accu, num) => accu + num, 0) / student.grades.length;

    let studentGrade = {
        name: student.name,
        status: avgMark >= 50 ? "Pass" : "Fail",
        average: avgMark.toFixed(2)
    };

    if (avgMark >= 50) {
        passStudent.push(studentGrade);
    } else {
        failStudent.push(studentGrade);
    }
});

console.log("Pass Students:");
console.table(passStudent);
console.log("-------------------------------");
console.log("Fail Students:");
console.table(failStudent);
console.log("-------------------------------");
