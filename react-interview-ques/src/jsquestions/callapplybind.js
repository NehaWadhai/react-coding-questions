//call apply bind

const obj = {
    name: 'Alice',
     greet(age){
        console.log(`Hello${this.name} is ${age}`)
    }
}

greet.call(obj,31) // Hello Alice
greet.apply(obj,[31]) // Hello Alice
greet.bind(obj,31)() // Hello Alice

//==================================================
//input output question

var age =31 
const obj1 = {
    name: 'Alice',
    age:25,
        greet(){
            console.log(`Hello${this.name} is ${age}`)
        }
    }
const obj2 = {age:25}

obj1.greet.call(obj2) // Hello Alice is 25
obj1.greet.apply(obj2) // Hello Alice is 25
obj1.greet.bind(obj2)()// Hello Alice is 25


//==================================================
var status = 'laugh'
setTimeout(()=>{
    const status = 'sad'
    const data={
        status: 'happy',
        getStatus(){
            return this.status  
        }
    }
    console.log(data.getStatus()) // happy
    console.log(data.getStatus.call(this)) // laugh
},0)

//--    --------------------------------------------
//Append array to another array

const arr = [1,2,3]
const ele = [4,5,6]
arr.push(...ele)

//=====================================================

function fn(){
    console.log(this)
}

let user = {
    g : fn.bind(null)
}

user.g()// window object

//=====================================================

function fn(){
    console.log(this.name)
}

 fn = fn.bind({name :"alice"}).bind({name: 'john'})
 
 fn() // alice it will bind to first bind only