//you are given integer array coins representing coins of different 
//denominations and an integer amount representing a total amount of money.
//Return the fewest number of coins that you need to make up the exact target amount. 
//If it is impossible to make up the amount, return -1.

//You may assume that you have an unlimited number of each coin.

//Example 1:

//Input: coins = [1,5,10], amount = 12

//Output: 3

class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let arr = Array(amount+1).fill(Infinity)
        arr[0] = 0

        for(let currAmount = 1; currAmount <= amount; currAmount++){
            for(let coin of coins){
                if(currAmount - coin >= 0){
                    arr[currAmount] = Math.min(arr[currAmount], 1 + arr[currAmount - coin])
                }
            }
        }
        return arr[amount] === Infinity ? -1 : arr[amount];
    }
}
