/* 
Let’s check if a user is eligible for a bonus based on multiple conditions:

They must have completed more than 5 tasks.
They must have worked more than 40 hours.
If they worked more than 40 hours, the bonus will be given only if they also 
have a performance rating of 4 or higher.
If they have completed fewer than 5 tasks, they need to have worked at least
50 hours to be considered for a bonus. */

function getBonus(tasks, hours, rating) {
    if (tasks > 5 && hours > 40 && rating >= 4) {
        console.log("You get the bonus");
    } else if (tasks <= 5 && hours > 50) {
        console.log("You be considered for the bonus");
    } else
        console.log("You can't get the bonus");
}

getBonus(6, 45, 5);