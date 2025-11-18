//three state - fulffiled , rejected, pending


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

function promisePolyfill(executor) {

    let onResolve;
    let onReject;
    let isResolved = false;
    let isReject = false;
    let isCalled = false;
    let val;

    function resolve(value){
        isResolved = true;
        val = value
        if(typeof onResolve == 'function' && !isCalled){
            isCalled = true;
            onResolve(value)
        }
        return this;
       
    }
    function reject(value){
        isReject=true;
        val = value
        if(typeof onReject == 'function' && !isCalled){
            isCalled = true;
            onReject(value)
        }
        return this;
    }

    this.then = function (callback){
        onResolve = callback;
        if(isResolved && !isCalled){
            isCalled = true;
            onResolve(val)
        }
        return this;
    }

    this.catch = function(callback){
        onReject = callback;
        if(isReject && !isCalled){
            isCalled = true;
            onReject(val)
        }
        return this
    }
    try{
        executor(resolve, reject);
    }catch(error){
        reject(error);
    }
   
}

const prom = new promisePolyfill((resolve, reject) => {
    // setTimeout(() => {
        reject("Promise Polyfill reject!");
    // }, 1000);
});

prom.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}   );