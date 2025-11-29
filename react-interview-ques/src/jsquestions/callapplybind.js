//call apply bind
//Call will invoke the function immediately
//apply will invoke the function immediately but takes array as second argument
//bind will return a new function which can be invoked later
//we cannot manipulate this keyword in arrow function using call apply bind
// blog for roadside coder video -- 
https://roadsidecoder.hashnode.dev/javascript-interview-questions-call-bind-and-apply-polyfills-output-based-explicit-binding


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


 //=====================================================

 const animals = [{species: 'lion', name: 'king'}, {species: 'whale', name: 'queen'}, 
    {species: 'tiger', name: 'stripes'}]

    function printAnimal(){
        this.print = function(){
                console.log(`${this.species} : ${this.name}`)
        }

        this.print()
    }

    printAnimal(animals[0]) //undefined : undefined because this refers to globla object
    printAnimal.call(animals[1]) // whale : queen

 //=====================================================

 //find min/max in array using call apply bind

    const numbers = [4,2,8,6,1,5]
    const max = Math.max.apply(numbers)

//=======   ==============================================

function f(){
    console.log(this)
}

let username = {
    g: f.bind(null) // or passing this will result in window object
}

username.g() //window object will get print 
//===================================================== 
let obj5 = {
   name:'neha',
}

let username1 = {
    g: f.bind(this)
}
username1.g() //{name: 'neha'}

//==============================================================
// bind chaining does not exist it will bind to pn object only 

function f1(){
    console.log(this.name)
}

let f1user = f1.bind({name: 'alice'}).bind({name: 'john'})
f1user() // alice

//===============================================================
// bind questions 

function checkPassword(success, failure){
    let password = prompt("Enter your password")
    if(password === "secret"){
        success()
    }else{
        failure()
    }
}

let user2 = {
    name: 'neha',
    loginSuccess(){
        console.log(`${this.name} logged in`)
    },
    loginFailure(){
        console.log(`${this.name} failed to log in`)
    }
}

checkPassword(user2.loginSuccess.bind(user2), user2.loginFailure.bind(user2)) // will bind to user2 object

let user3 = {
    name: 'john',
    login(res){
        if(res){
            console.log(`${this.name} logged in`)
        }else{
            console.log(`${this.name} failed to log in`)
        }
    }
}

checkPassword(user2.loginSuccess.bind(user2,true), user2.loginFailure.bind(user2,false)) // will bind to user2 object

//===============================================================================
// Polyfill for call 

let user4 = {
    name: 'neha'
}

function purchaseCar(model, price){
    console.log(`${this.name} purchased ${model} at  ${price}`)
}

//lets create a polyfill for call

Function.prototype.myCall = function(context={}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + " is not a function")
    }
    context.fn =this // this refers to the function on which myCall is invoked
    context.fn(...args)

}

//lets create a polyfill for apply

Function.prototype.myApply = function(context={}, args = []){
    if(typeof this !== 'function'){
        throw new Error(this + " is not a function")
    }
    if(!Array.isArray(args)){
        throw new Error("Create a array for second argument")
    }
    context.fn =this // this refers to the function on which myCall is invoked
    context.fn(...args)

}

Function.prototype.myBind = function(context={}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + " is not a function")
    }

    context.fn =this // this refers to the function on which myCall is invoked
    return function(...newArgs){
        return context.fn(...args,...newArgs)
    }

}
purchaseCar.myBind(user4, ['BMW', '500000']) // neha purchased BMW at 50000
purchaseCar.myCall(user4, 'BMW', '500000') // neha purchased BMW at 50000
purchaseCar.myApply(user4, 'BMW', '500000')() // neha purchased BMW at 50000


//=============================================

  Function.prototype.myCall = function (thisArg, ...argArray) {
    // return this(...thisArg, ...argArray);
    if (typeof this !== "function") {
      throw "no function";
    }
    thisArg = thisArg ?? globalThis;
    thisArg.fn = this;
    const res = thisArg.fn(...argArray);
    return res;
  };
  