/*
Problem Description
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input format
You ‘ll be given space-separated strings.

Output format
Output the longest common prefix amongst the array of strings. If there is no common prefix, return an empty string "".

Sample Input 1
flower flow flight

Sample Output 1
fl

Explanation 1
fl is common in all three strings

Sample Input 2
dog racecar car

Sample Output 2
""

Explanation 2
There is no common prefix.Print an empty string
*/


/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    let limit = strs[0].length;
    let prefix = '';

    if(!strs.length) return  prefix;

    for(let i = 0; i < limit; i++) {
        let char = strs[0][i];
        //console.log(char);
        if(!char) break;
        if(strs.every(str => (str[i] == char))){
            prefix += char;
        } else {
            break;
        }
        //console.log(prefix);
        //console.log("--");
     }
     return prefix;
}
