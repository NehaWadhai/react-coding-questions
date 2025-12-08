//given array of integers, find the contiguous subarray within an array (containing at least one number)
// which has the largest product.
//A subarray is a contiguous non-empty sequence of elements within an array.

//You can assume the output will fit into a 32-bit integer.

//Example 1:

//Input: nums = [1,2,-3,4]

//Output: 4

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let l = 1
        let r = 1
        let ans = nums[0]
        let n = nums.length

        for(let i = 0; i < nums.length ; i++){
           
            l *= nums[i]
            r *= nums[n - 1 - i]
            
            ans = Math.max(ans, Math.max(l,r))
             l = l == 0 ? 1 : l
            r = r == 0 ? 1 : r
        }
        return ans === -0 ? 0 : ans
    }
}
