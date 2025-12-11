//find the longest common subsequence between two strings using dynamic programming

// Given two strings text1 and text2, return the length of the longest common subsequence 
//between the two strings if one exists, otherwise return 0.

// A subsequence is a sequence that can be derived from the given sequence by deleting some or 
//no elements without changing the relative order of the remaining characters.

// For example, "cat" is a subsequence of "crabt".
// A common subsequence of two strings is a subsequence that exists in both strings.

// Example 1:

// Input: text1 = "cat", text2 = "crabt" 

// Output: 3 
// Explanation: The longest common subsequence is "cat" and its length is 3.
//Need to revisit this problem
class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let arr = Array.from({length: text1.length +1}, ()=> Array(text2.length +1 ).fill(0))
            // let arr = []
        for(let i =1 ; i <= text1.length ; i++){
            for(let j =1 ; j <= text2.length ; j++){
            
            if(text1.charAt(i-1) == text2.charAt(j-1)){
                arr[i][j] = 1 + arr[i-1][j-1]
            }else{
                arr[i][j] = Math.max(arr[i][j-1], arr[i-1][j])
            }
            }
        }
        return arr[text1.length][text2.length]
    }
}
