//*
* JAVA code for Max Consecutive Ones
* https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3238/
*
*//

class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int count = 0;
        int max = 0;
        for (int i=0; i<nums.length; i++) {
            if(nums[i] == 1){
                count = count + 1;
                if(count > max){
                    max = count;
                }
            } else {
                count = 0;
            }
        }
        return max;
    }
}
