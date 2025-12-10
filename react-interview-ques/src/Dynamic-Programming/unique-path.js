// There is an m x n grid where you are allowed to move either down or to the right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that can be taken from the top-left
// corner of the grid (grid[0][0]) to the bottom-right corner (grid[m - 1][n - 1]).

// You may assume the output will fit in a 32-bit integer.

class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let arr = Array.from({length : m}, () => Array(n).fill(0))
        console.log('arr',arr)
       for(let i=0 ; i < m; i++){
        for(let j=0 ; j < n; j++){
            if(i == 0 || j== 0){
                arr[i][j] = 1
            }else{
                arr[i][j] = arr[i][j-1] + arr[i-1][j] // you need to go over this to reach what is visual representation of grid
            }

           
        }
       }

       return arr[m-1][n-1]
    }
}
