//A subsequence is a sequence that can be derived from the given sequence by deleting some or 
//no elements without changing the relative order of the remaining characters.

//For example, "cat" is a subsequence of "crabt".
//Example 1:

// Input: nums = [9,1,4,2,3,3,7]

// Output: 4
// Explanation: The longest increasing subsequence is [1,2,3,7], which has a length of 4.


class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n = nums.length
        let arr = Array(n).fill(1)

        for(let i =1; i < n ; i++){
            for(let j = 0 ; j < i; j++){
                if(nums[j] < nums[i]){
                    if(arr[j] + 1 > arr[i]){
                        arr[i] += 1
                    }
                    
                }
            }
        }
        let max = 0
        for(let i=0 ; i < n ;i++){
            max = Math.max(arr[i], max)
        }
        return max
    }
}
