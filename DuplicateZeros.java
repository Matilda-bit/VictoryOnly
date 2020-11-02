**/
* DuplicateZeros
* https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
* Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
* Note that elements beyond the length of the original array are not written.
* Do the above modifications to the input array in place, do not return anything from your function.
*
**/

class Solution {
    public void duplicateZeros(int[] arr) {
        int count = 0, n = arr.length;
        for(int i: arr)
            if(i == 0)
                ++count;
        for(int i = n - 1, j = n - 1 + count; i >= 0; --i, --j){
            if(j < n)
                arr[j] = arr[i];
            if(arr[i] == 0 && --j < n)
                arr[j] = 0;
        }
    }
   
}
