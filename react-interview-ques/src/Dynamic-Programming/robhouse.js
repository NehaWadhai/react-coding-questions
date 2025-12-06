// You are given an integer array nums where nums[i] represents the amount of money the ith house has. 
// The houses are arranged in a straight line, i.e. the ith house is the neighbor of the (i-1)th and (i+1)th house.
// You are planning to rob money from the houses, but you cannot rob two adjacent houses because the security system will automatically alert the police if two adjacent houses were both broken into.
// Return the maximum amount of money you can rob without alerting the police.

//let say 3 houses are there 
// ...n(n-2) n(n-1) n(n)
//To Rob nth house person has 2 options
//total amount if rob (n-2)th house + amount in nth house
//total amount if n house is not  rob ==> (n-1)th house

//Total n(n-2) = n(n-2) + n(n)
//Total(n-1) = n(n-1)

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let robbedHouse = []
        if (nums.length < 2) return nums[0]
        if (nums.length < 3) return Math.max(nums[0], nums[1])
        robbedHouse[0] = nums[0]
        robbedHouse[1] = Math.max(nums[0], nums[1])
        for(let i =2; i < nums.length ; i++){
            // 2 9 8 3 6  rh - 2 9
            //2 
        robbedHouse[i] = Math.max((robbedHouse[i-2]+nums[i]),robbedHouse[i-1])
        }

        return robbedHouse[nums.length - 1]
    }
}


