//You just have to skip first and last values in array and then perform normal linear array robhouse operation


class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     robHouseHelper(arr){
         let res = []
        if(arr.length < 2 ) return arr[0]
        if(arr.length < 3 ) return Math.max(arr[0],arr[1])
       
        res[0] = arr[0]
        res[1] = Math.max(arr[0],arr[1])

        for(let k =2; k < arr.length; k++){
            res[k] = Math.max((res[k-2] + arr[k]) , res[k-1])
        }
        console.log('res', res)

        return res[res.length - 1]

    }
    rob(nums) {
        if(nums.length < 2 ) return nums[0]
       let skipFirstHouse = []
       let skipLastHouse = []

       for(let i =0; i < nums.length -1;i++){
        skipFirstHouse[i] = nums[i+1]
        skipLastHouse[i] = nums[i]
       }
       const maxFirstHouseSkip = this.robHouseHelper(skipFirstHouse)
       const maxLastHouseSkip = this.robHouseHelper(skipLastHouse)
        console.log('skipFirstHouse', skipFirstHouse)
        console.log('skipLastHouse', skipLastHouse)
        console.log('maxFirstHouseSkip', maxFirstHouseSkip)
        console.log('maxLastHouseSkip', maxLastHouseSkip)
        return Math.max(maxFirstHouseSkip,maxLastHouseSkip)
    
    }
}
