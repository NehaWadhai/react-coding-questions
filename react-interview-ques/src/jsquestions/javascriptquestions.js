
//Sample input / output question -- 1
const obj = [{key: 'Sample 1 ', data : 'data 1'},
    {key: 'Sample 3 ', data : 'data 1'},
    {key: 'Sample 2 ', data : 'data 1'},
    {key: 'Sample 1 ', data : 'data 1'},
    {key: 'Sample 2 ', data : 'data 1'},
    {key: 'Sample 3 ', data : 'data 1'},
    {key: 'Sample 1 ', data : 'data 1'},
    {key: 'Sample 1 ', data : 'data 1'},
    ]
    
    //output = {'Sample 1 ': [{
    //  {key: 'Sample 3 ', data : 'data 1'},   
    // }],
    // }
    
    const hashMap = {}
    
    obj.forEach((ele)=>{
        if(!hashMap[ele.key]){
           
            hashMap[ele.key] = [ele]
           
        }else{
            
            hashMap[ele.key].push(ele)
        }
    })
    
    console.log('hasMap', hashMap)

//Sample input / output question -- 2
// Write Memomized function to get value from cache if args are same
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

const add = (a,b) => a +b
const map = new Map()
function memomized(fn){
    function temp(...args){
        const key = args.join("_")
       
        if(map.has(key)){
             console.log('got from cache')
            return map.get(key)
            
        }else{
            const result = fn(...args)
            map.set(key,result)  
             console.log('have set to cache')
            return result
        }
    }

    return temp
}

const addmemo = memomized(add)
console.log(addmemo(1,2))
console.log(addmemo(3,2))
console.log(addmemo(3,2))
console.log(addmemo(1,2))

//Sample input / output question -- 3
//Flatten array

const arr = [1,2,3,[4,[5,6]], [7,[8,6,9,5]],10,8,'abc', {test: 'neha'}]
// output -- 1,2,3,4,5,6,7,8


const result = []
const currying = (arr) =>{
   
    arr.forEach((ele)=>{
    if(Array.isArray(ele)){
         currying(ele) 
        
    }else{
         result.push(ele)
        
    }
})
return result
}


console.log(currying(arr))


//===============================================================================

const array = [3,5,9,1,4,6] 
const target = 10

//[2,3]

function sum(arr,target){
    const temp = [...arr]
    const a = temp.sort((a,b) => a-b)
    console.log('a',a)
    let l = 0 
    let r = arr.length -1 
    while(l<r){
        if(a[l] + a[r] < target){
            l++
        }
        if(a[l] + a[r] > target){
            r--
        }
        if(a[l] + a[r] === target){
            console.log('arr',temp,arr)
            return [arr.indexOf(a[l]), arr.indexOf(a[r])]
        }
    }
}

console.log(sum(array,target))

//======================================================================



