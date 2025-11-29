//find unique values in array

function conuntUniqVal(arr){
    let map = {}
    for(let i = 0; i< arr.length ; i++){
        if(!map[arr[i]]){
            map[[arr[i]]] = 1
        }else{
             map[[arr[i]]] +=1
        }
    }
    return Object.keys(map).length
    console.log(map)
}

console.log(conuntUniqVal([1,1,4,1])) //2

//==================================================
// if digits are there and you need to find the frequncy of each digit

function sameFreq(arr1,arr2){
    let map={}
    let map2 = {}
  for (let digit of arr1.toString()) {
    if(!map[Number(digit)]){
        map[Number(digit)] = 1
    }else{
        map[Number(digit)] += 1
    }
}

 for (let digit of arr2.toString()) {
    if(!map2[Number(digit)]){
        map2[Number(digit)] = 1
    }else{
        map2[Number(digit)] += 1
    }
}
for (let digit of arr1.toString()) {
    if(map[Number(digit)] !== map2[Number(digit)]){
        return false
    }
}
    return true
    
}

console.log(sameFreq(18267,26781))

//==========================================================

function areDuplicates(...args){
    console.log('args',args)
    let map ={}
    for(let i = 0 ;i < args.length ; i++){
        if(!map[args[i]]){
            map[args[i]] = 1
        }else{
            return false
        }
    }
    return true
     
 }
 
 console.log(areDuplicates(1,2,2)) // false

//==========================================================
function constructNotes(str1,str2){
  
    let map ={}
   
    for(let i = 0 ;i < str2.length ; i++){
        if(!map[str2[i]]){
            map[str2[i]] = 1
        }else{
            map[str2[i]] += 1
        }
    }
    
    for(let i = 0 ; i < str1.length; i++){
        if(!map[str1[i]]){
            return false
        }
        map[str1[i]]--
    }
    return true
     
 }
 
 console.log(constructNotes('aabbcc','bcabcaddff'))// true
 console.log(constructNotes('aa','abc'))// false
//==========================================================
// find element frequency in array
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

function sortedFrequency(arr,t){
  let map={}
  
  for(let i =0 ; i < arr.length; i++){
      if(!map[arr[i]]){
          map[arr[i]] = 1
      }else{
          map[arr[i]] +=1
      }
  }
  console.log(map[t])
  if(map[t]){
      return map[t]
  }
     
       
 
  
//  return (r - l) + 1
}

console.log(sortedFrequency([1,1,2,2,2,2,3],2))