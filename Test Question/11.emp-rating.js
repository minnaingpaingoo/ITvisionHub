/**
 * emp1=[1,2,60,1,2]
 * emp2=[2,1,8,2,3]
 * Emp Rating
 */

var emp1 = [1, 2, 60, 1, 2];
var emp2 = [2, 1, 8, 2, 3];
let count_emp1 = 0;
let count_emp2 = 0;
if(emp1.length === emp2.length){
    for (let i = 0; i < emp1.length; i++) {
        if (emp1[i] > emp2[i]) {
            count_emp1++;
        }
        else
            count_emp2++;
    }
    if (count_emp1 > count_emp2)
        console.log("Emp1 gets more rating.");
    else
        console.log("Emp2 gets more rating.");
}
else 
    console.log("");