/*
Problem Description
The sports teacher told the students of a class to assemble in the playground. The order in which the students are standing in the playground is given in an array where each element of the array represents the height of student[i]. Rahul, the class leader, is asked to check if the heights of students at even positions are monotonic (i.e either in non-decreasing order or non-increasing order). Say "increasing" if the students at even positions are standing in non-decreasing order of their heights. Else say “decreasing” if the students at even positions are standing in non-increasing order. Else, say “none”.


Non-decreasing order, for example, is 1,1,2,3,4,4. This basically means increasing order, but a number can also be equal to the previous number.
Similarly non-increasing order means decreasing order, where a number can be equal to the previous number.


Input format
First line contains an integer n (number of students)

Second line contains n space separated integers.


Output format
A string, can be "decreasing", “increasing” or “none”


Sample Input 1
6

12 65 15 72 19 72


Sample Output 1
increasing


Explanation
Students on even positions are student[0], student[2], and student[4], i.e., 12, 15, and 19. Since 12 < 15 < 19, the answer is "increasing".


Constraints
3<=N<=100000

-100000<=student[i]<=100000
*/


/**
 * @param {number[]} numbers 
 * @return {string}
 */
function classRepresentative(numbers) {
    let count = numbers.length;
    let result = "";
    if(count < 3) return result;
    let prevEl = numbers[0];
    for(let i = 2; i < count; i++){
        
        if(i % 2 == 0) {
            if(prevEl <= numbers[i]){
                if(result == "increasing" || result == ""){
                    result = "increasing";
                } else {
                    result = "none";
                    break;
                }
            }
            if(prevEl >= numbers[i]) {
                if(result == "decreasing" || result == ""){
                    result = "decreasing";
                } else {
                    result = "none";
                    break;
                }
            }
        }
    }
    return result;
}
