/* 

*/
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