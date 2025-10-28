
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