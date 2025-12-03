//three state - fulffiled , rejected, pending



// const { type } = require("@testing-library/user-event/dist/type");


// const api = "https://api.github.com/users/NehaWadhai";

//Promise is an object representing the eventual completion or failure of an asynchronous operation
// 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
//   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
//   2.2) A promise has 3 states: pending | fulfilled | rejected.
//   2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//   2.4) A promise resolves only once and it is immutable. 
//   2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. 
// This returned value will be used by the next .then()

//creating promis polyfill
function p1(){
    return new promisePolyfill((resolve, reject) => {
        setTimeout(() => {
            reject("P1 Polyfill resolved!");
        }, 1000);
    });
}
function p2(){
    return new promisePolyfill((resolve, reject) => {
        setTimeout(() => {
            resolve("P2 Polyfill resolved!");
        }, 1000);
    });
}
function p3(){
    return new promisePolyfill((resolve, reject) => {
        setTimeout(() => {
            reject("P3 Polyfill resolved!");
        }, 1000);
    });
}

// promisePolyfill.all = function (promises){
//     let res = []
//     let pending = promises.length
//     return new promisePolyfill((resolve,reject)=>{
//         promises.forEach((prm, idx)=>{
//             prm.then((value)=>{
//                  res[idx] = value
//                  pending--
//                  if(pending ===0){
//                    resolve(res)
//                  }
//              }).catch((err)=>{
//                  reject(err)
//              })
     
//          })
//     })
   


// }


// promisePolyfill.all([p1(), p2(), p3()]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{   
//     console.log(err)
// })



function promisePolyfill(executor){
    let isResolved
    let isRejected
    let val
    let fulffiled = false
    let isCalled = false

    this.resolve = function(value){
        fulffiled = true
        console.log("Inside resolve", isResolved)
        val = value
        if(typeof isResolved === "function" && !isCalled){
            isResolved(value)
        }   
    }

    this.reject = function(value){
        fulffiled = true
        console.log("Inside resolve", isResolved)
        val = value
        if(typeof isResolved === "function" && !isCalled){
            isResolved(value)
        }
    }
   
    this.then = function(cb){
        if(typeof cb === "function" && fulffiled){
            cb(val)
            return this
        }
        isResolved = cb
        return this

    }
    this.catch = function(cb){
        if(typeof cb === "function" && fulffiled){
            cb(val)
            return this
        }
        isRejected = cb
        return this

    }

    executor(this.resolve,this.reject)
}


const prom = new promisePolyfill((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected!");
    }, 2000);
});

prom.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})