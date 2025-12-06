//So for palindrome we wll check from each index expanding left and right until the characters are equal


class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if(s.length === 1) return s.charAt(0)
        let resIndex = 0
        let substringLength = 0

        for(let i =0; i < s.length;i++ ){
            let l = i
            let r = i
            while(l >=0 && r < s.length  && s.charAt(l) === s.charAt(r)){
                if(r-l + 1 > substringLength){
                    resIndex =l 
                    substringLength = r -l + 1
                }
                l--
                r++
            }
        //for even length
        l = i 
        r = i +1
             while(l >=0 && r < s.length   && s.charAt(l) === s.charAt(r)){
                if(r-l + 1 > substringLength){
                    resIndex =l 
                    substringLength = r -l + 1
                }
                l--
                r++
            }
        }
        return s.substring(resIndex,substringLength + resIndex )
    }
}

