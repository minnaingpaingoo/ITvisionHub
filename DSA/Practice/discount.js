/* Questions */

/*Let's imagine we need to check if someone is eligible for a special discount. The conditions could be:

They must be an adult (18 or older).
They must be a student or senior (either is okay).
If they are a student, they need to have a student ID.
If they are a senior, they must be over 65 years old.
The discount is valid only if today is a weekday. */

function checkDiscount(age, isStudent, isSenior, hasStudentID, isWeekday) {
    if (
      age >= 18 &&
      ((isStudent && hasStudentID) || (isSenior && age > 65)) &&
      isWeekday
    ) {
      console.log('You are eligible for a special discount!');
    } else {
      console.log('You are not eligible for a discount.');
    }
  }