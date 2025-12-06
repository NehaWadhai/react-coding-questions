class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    countPalindrome(s,l,r){
        let count = 0
    for(let i = 0; i< s.length; i++){
        while(l >=0 && r < s.length && s.charAt(l) === s.charAt(r)){
            count++
            l--
            r++
        }
    }
    return count

    }
    countSubstrings(s) {
        let count = 0
        for(let i =0; i< s.length; i++){
        count += this.countPalindrome(s,i,i)
        count += this.countPalindrome(s,i,i+1)
        }
        



        return count
    }
}
