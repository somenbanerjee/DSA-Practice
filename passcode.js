/*
Problem Description
Rohan is playing a game in which he has got two strings, string A and string B. He needs to generate a passcode to qualify for the next level using those strings. The passcode will be in the form of a string. He needs to take the first character of string A and he should add it to the passcode. After that, he needs to take the first character of string B and he should add it to the passcode. Then he needs to take the second character of string A and he should add it to the passcode, and so on.

He needs to continue the process until there are no letters left in one of either A or B. When this happens, add all the remaining letters of the other string to the passcode. This is the resultant passcode to qualify for the next level, return this.


Input format
First line contains string A.

Second line contains string B


Output format
Return a string(passcode).


*/

/**
 * @param {string} A
 * @param {string} B
 * @return {string}
 */

function passCode(A,B) {
    let passCode = "";
    let lengthA = A.length;
    let lengthB = B.length;

    if(lengthA == 0) return B;
    if(lengthB == 0) return A;

    let i = 0;
    
    while(i <= Math.max(lengthA, lengthB)) {

        if(i < lengthA) passCode += A[i]; 
        if(i < lengthB) passCode += B[i]; 

        i++;
    }
    return passCode;
}
