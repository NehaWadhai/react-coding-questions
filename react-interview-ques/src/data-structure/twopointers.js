//find uniqvalues in array

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
  
    let count = 1;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1]) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countUniqueValues([1,1,4,1].sort())); // 2
  

  //==================================================

  function isSubsequence(str1,str2){
  
    let i = 0
    let j = 0
    
       while(j < str2.length){
           if(str1[i] === str2[j]){
               i++
           }
           j++
           if(i === str1.length) return true
       }
    return false
   }
   
   console.log(isSubsequence('abc','ayubiuic')) //