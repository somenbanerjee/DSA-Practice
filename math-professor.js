/*
Problem Description
A Maths professor was getting bored. So he thought of performing a task.

The names of the students in his class are given as an array of strings. Another string, B, is given, consisting of distinct lowercase English letters. For each name in the array of strings, he wants to calculate the number of unique letters from string B that appear in that name (not including duplicates).


Input format
First line contains an integer n.(Number of names present in the register).

Second line contains the string B.

Next n lines contain names of n students.


Output format
Return an array of integers where the ith element corresponds to the number of unique letters in string B which appear in name[i].


Sample Input 1
3

iye

hi

bye

bebe


Sample Output 1
1 2 1


Explanation
String B is "iye"

The first name "hi" contains 1 unique letter from string B - "i".

The second name "bye" contains 2 unique letters from string B - "y" and "e".

The third name "bebe" contains 1 unique letter from string B - "e". Although "e" appears twice in "bebe", only unique letters should be counted, so it's counted only once.


Constraints
1<=n<=100

1<=string.length<=30
*/

/**
 * @param {number} n
 * @param {string[]} v 
 * @param {string} B
 * @return {number[]}
 */

function mathProfessor(n,v,B) {
    let result = [];
    let distinctLettersCount = B.length;

    if(!n || n > 100) return result;
    if(!distinctLettersCount  || distinctLettersCount > 26) return result;
    
    v.forEach((name) => {
        let uniqueCount = new Set();
        for(let i = 0; i <= distinctLettersCount; i++) {
            if(name.includes(B[i])) {
                uniqueCount.add(B[i]);
                continue;
            }
        }
        result.push(uniqueCount.size);
    });
    //console.log(result);
    return result;
}

