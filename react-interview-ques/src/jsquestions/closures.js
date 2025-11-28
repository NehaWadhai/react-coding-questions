function find() {
    let a = []
    for(let i =0; i < 100000; i++){
        a[i] = i * i
    }
    return function(index) {
      
       console.log(a[index])
    };
}

const closure = find();
console.time("Start Call");
closure(5); // prints 25
console.timeEnd("End Call");
console.time("Start Call");
closure(9); // prints 25
console.timeEnd("End Call");


//===================================================================
//Closures with var 

for(var i =0; i< 4; i++){
    function a (i){
    setTimeout(()=>{
        console.log(i)
    },1000)
}
a(i)
}

//====================================================================================
//Make this run only once 

function runOnce(){
    let called = false
    return function(...args){
        if(!called){
            called = true
            console.log('Function already called')
        }else{
            console.log('Function already called')
        }
    }
}

let once = runOnce()
runOnce()
runOnce()
runOnce()
runOnce()
runOnce()