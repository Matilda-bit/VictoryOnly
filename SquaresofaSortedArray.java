/**
* Squares of a Sorted Array
* https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/
* Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
*
**/


class Solution {
    public int[] sortedSquares(int[] A) {
        int temp = 0;
        for (int i=0; i<A.length; i++) {
            temp = A[i] * A[i];
            A[i] = temp; 
        }  
        Arrays.sort(A); 
        return A;
    }
}
