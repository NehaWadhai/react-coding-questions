//maxSubarray

export function maxSubarray(arr, k) {
        let maxSum = 0
        let tempSum = 0
        if(!arr.length) return null
        for(let i = 0; i< k;i++){
            tempSum += arr[i]
        }
        maxSum = tempSum
        
        for(let i = k; i < arr.length;i++){
            tempSum = tempSum - arr[i-k] + arr[i]
            maxSum = Math.max(tempSum, maxSum)
        }
        console.log('temp',maxSum)
        return maxSum
}

const arr = [2, 1, 5, 1, 3, 2];
maxSubarray(arr, 3); // 9
// function subarray

function maxSubArray(arr, n) {
    let l = 0
    let r = n -1 
    let maxSum = 0 
    let sum = 0
     for(let i = l ; i < n; i++){
             sum += arr[i]
        }
    while(r < arr.length){
      maxSum = Math.max(maxSum,sum)
      console.log('maxSum', maxSum)
      sum = sum - arr[l] + arr[r+1]
      r++
      l++
    }
    return maxSum
}

// console.log(maxSubArray([100,200,300,400], 2)); // true (4 - 10 = -6)
console.log(maxSubArray([1,4,2,10,23,3,1,0,20], 4))
console.log(maxSubArray([-3,-2,7,-4,1,-1,4,-2,1], 2))
// console.log(pair([1, 5, 9], 4));       // true (5 - 1 = 4)
// console.log(pair([1, 5, 9], 10));      // false 
//============================================================
// longest substring

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

function findlongestSubString(str){
    let l =0 
    let map = {}
    let maxL = 0

    for(let r =0; r < str.length; r++){
        let char = str[r]
        if(map[char] >= l){
            l = map[char] +1
        }
        map[char] = r
        console.log(map)
        maxL = Math.max(maxL, r-l +1)
        
    }
    return maxL
}

console.log(findlongestSubString('rithmschool'))