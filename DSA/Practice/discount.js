/**
 * Create the getDiscount Function for the following.
 1. The person must be over 18 years old.
 2. The person may be student or senior.
 3. If the student, must has the StudentId.
 4. If the senior, must be over 65 years old.
 5. The discount will be only on weekdays.
 */
function getDiscount(age, isStudent, hasStudentId, isSenior, isWeekday) {
    if (age > 18 &&
        ((isStudent && hasStudentId) || (isSenior && age > 65)) &&
        isWeekday) {
        console.log("Get Discount");
    } else {
        console.log("Don't get Discount");
    }
}

getDiscount(18, true, true, false, true);