//shaloow copy 
//whenever 

let arr = [1,2,4,5]
let b = [...arr]
b.push(9)
console.log(arr) // [1,2,4,5]
console.log(b) // [1,2,4,5,9]

//deep copy
let arr2 = [1,2,[3,4],5]
let c = JSON.parse(JSON.stringify(arr2))

//writre a function to deep copy an object or array
function deepCopy(input){

    
    if(["string","number","boolean"].includes(typeof input) || input === null){
        return input
    }else if(Array.isArray(input)){
        return deepCopy(input)
    }else if(typeof input === 'object'){
        const obj = {}
        for(const key in input){
            console.log('key',key,input[key])
            obj[key] = deepCopy(input[key])
        }
        return obj
    }
}

const obj1 = {
a: {
    b:{
        c: 1
    }
}
}

const obj2 = deepCopy(obj1)
obj2.a.b = null


console.log('obj1',obj1)
console.log('obj2',obj2)

//======================================================================
//output based question

function multiplyNumeric(nums){
    const obj = nums
    for(let key in nums){
          console.log('type obj', obj[key])
        if(typeof nums[key] == 'number'){
            obj[key] = nums[key] * 2 
        }
       
    }
    return obj
    
}
let nums = { a: 100, b: 200, title: "My nums" };

console.log(multiplyNumeric(nums))