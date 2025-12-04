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

