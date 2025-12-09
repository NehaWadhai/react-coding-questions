// there is string s and dictionary of words dict
//Given a string s and a dictionary of strings wordDict, 
//return true if s can be segmented into a space-separated sequence of dictionary words.

//You are allowed to reuse words in the dictionary an unlimited number of times. 
//You may assume all dictionary words are unique.

//Example 1:

//Input: s = "neetcode", wordDict = ["neet","code"]

//Output: true
//Need revisit for better understanding

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
         let n = s.length
        let arr = Array(n+1).fill(false)
        let map = new Set(wordDict)
        console.log('map',arr)
        
        arr[0] = true
        let maxLength = 0
        for(let i =0 ; i < wordDict.length; i++){
            maxLength = Math.max(maxLength,wordDict[i].length)
        }

        for(let i =1 ; i <= n ;i++){
            for(let j= i -1 ; j >= Math.max(0, i - maxLength) ; j--){
                if(map.has(s.substring(j,i)) && arr[j]){
                arr[i] = true
                break
            }
            }
        }
        console.log('arr',arr)
        return arr[n]
    }
}
