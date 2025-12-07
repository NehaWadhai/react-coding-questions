//Need tp decode string where A=1, B=2,... Z=26
//To decode a message, digits must be grouped and then mapped back into letters using the reverse of the mapping above. There may be multiple ways to decode a message. For example, "1012" can be mapped into:

//"JAB" with the grouping (10 1 2)
//"JL" with the grouping (10 12)

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {

    let l = s.length
    let arr = []
    arr[0] =1
    arr[1] = s.charAt(0) === '0' ? 0 : 1
    for(let i = 2; i<= s.length; i++){
        let onedigit = parseInt(s.substring(i-1,i))
        let twodigit = parseInt(s.substring(i-2,i))
        if(onedigit >=1){
            arr[i] =  arr[i] ?  arr[i] + arr[i-1] : arr[i-1]
        }
        
         if(twodigit <= 26 && twodigit >= 10){
            arr[i] = arr[i] ?  arr[i] + arr[i-2] : arr[i-2]
        }

    }
    return arr[l] ? arr[l] : 0
    
    }
}
