//===================================

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

function countZeros(arr){
  let l = 0
  let r = arr.length - 1
  let firstZero = -1 
  while(l <= r){
      let mid = Math.floor((l + r) /2)
      
      if(arr[mid] === 1){
          l = mid+1
      }else{
         firstZero = mid
         r = mid -1
         
      }
      
     
       
  }
   return arr.length - firstZero
//  return (r - l) + 1
}

console.log(countZeros([0,0,0,0]))
//===========================================================
//find one element frequency in sorted array