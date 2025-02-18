/*Imagine we have a system that needs to generate a report for students, their courses, and their grades. The data consists of:

A list of students, each with a name and an array of courses.
Each course has an array of grades.
We need to:

Calculate the average grade for each student in each course.
Determine whether the student has passed or failed each course based on the average grade (passing grade = 60).
Create a final report that categorizes students by the number of courses they passed.
Identify the highest and lowest average grades among all students.
*/

// Data structure representing students, their courses, and grades
let students = [
    {
      name: 'Alice',
      courses: [
        { courseName: 'Math', grades: [85, 90, 78] },
        { courseName: 'History', grades: [92, 88, 94] },
      ],
    },
    {
      name: 'Bob',
      courses: [
        { courseName: 'Math', grades: [45, 50, 55] },
        { courseName: 'History', grades: [70, 75, 60] },
      ],
    },
    {
      name: 'Charlie',
      courses: [
        { courseName: 'Math', grades: [98, 96, 97] },
        { courseName: 'History', grades: [89, 84, 91] },
      ],
    },
  ];

function calculateAverage(grades) {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function generateReport(students) {
    let report = {};
    let highestAverage = { name: '', course: '', average: 0 };
    let lowestAverage = { name: '', course: '', average: 100 };
    let categoryCounts = {};

    students.forEach(student => {
        let passedCourses = 0;
        
        student.courses.forEach(course => {
            let avgGrade = calculateAverage(course.grades);
            let passed = avgGrade >= 60;
            
            if (passed) passedCourses++;
            
            // Track highest and lowest averages
            if (avgGrade > highestAverage.average) {
                highestAverage = { name: student.name, course: course.courseName, average: avgGrade };
            }
            if (avgGrade < lowestAverage.average) {
                lowestAverage = { name: student.name, course: course.courseName, average: avgGrade };
            }
        });
        
        // Categorize students based on passed courses
        categoryCounts[passedCourses] = (categoryCounts[passedCourses] || 0) + 1;
    });

    report.categoryCounts = categoryCounts;
    report.highestAverage = highestAverage;
    report.lowestAverage = lowestAverage;
    
    return report;
}

console.log(generateReport(students));
