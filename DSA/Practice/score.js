/* Questions */

/* Imagine we are assigning a grade based on a student's score.
 There are several conditions to evaluate:

If the student scored more than 90, they get an "A".
If the student scored more than 80 but less than or equal to 90, they get a "B".
If the student scored more than 70 but less than or equal to 80, they get a "C".
If the student scored more than 60 but less than or equal to 70, they get a "D".
If the student get perfectAttendance and score more than 80, they get + with their grade.
If the student scored 60 or below, they get an "F". */

function getGrade(score, att){
    let grade;
    switch(true){
        case score>90 :
            grade = "A";
            break;
        case score>80 :
            grade = "B";
            break;
        case score>70 :
            grade = "C";
            break;
        case score > 60: 
            grade = "D";
            break;
        case score < 60 :
            grade = "F";
            break;
        default:
            grade = "Invalid Score";
            break;
    }
    if(att){
        return grade+="+";
    }else{
        return grade;
    }
    
}

console.log(getGrade(90,true));