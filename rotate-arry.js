/*
Problem Description
Given an array, rotate the array to the right by k steps, where k is non-negative.

Input format
First line contains two space separated integers N and K. Second line contains n space separated integers.

Output format
Only line contains N space separated integers.

Sample Input 1
7 3 1 2 3 4 5 6 7

Sample Output 1
5 6 7 1 2 3 4

Explanation
rotate 1 steps to the right: [7,1,2,3,4,5,6] rotate 2 steps to the right: [6,7,1,2,3,4,5] rotate 3 steps to the right: [5,6,7,1,2,3,4]

Constraints
1 <= N,K <= 100000 -10^9 <= A[i] <= 10^9
*/

/**
 * @param {number} n
 * @param {number} k
 * @param {number[]} nums
 * @return {number[]}
 */
function rotateArray(n,k,nums)
{
    if(!n || !k) return nums;
    while(k) {
        nums.unshift(nums.pop());
        k--;
    }
    return nums;
}
