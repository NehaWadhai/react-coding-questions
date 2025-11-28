//async function will always return a promise

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
    });

async function getData(){
    return p;
}

p.then((res) => console.log(res)); // Logs "Promise resolved!" after 2 seconds

//=================================================================================
//await is the keyword which only be used inside async function

const pr  = new Promise((resolve, reject) => {resolve("Promise resolved!")});

async function fetchData(){
    const res = await pr; //waits until the promise is resolved
    console.log(res);
}


fetchData(); // Logs "Promise resolved!"

//=================================================================================


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved!");
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve("Promise 2 resolved!");
    }, 2000);
});

async function fetchAllData(){
    console.log("Fetching all data...");
    const res1 = await promise1;
    console.log(res1); // Logs "Promise 1 resolved!" after 1 second
    const res2 = await promise2;    
    console.log(res2); //logs "Promise 2 resolved!" after 2 seconds

}

//===============================================================================

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved!");
    }, 10000);
});
const promise4 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve("Promise 4 resolved!");
    }, 2000);
});

async function fetchAllData(){
    console.log("Fetching all data...");
    const res1 = await promise1;
    console.log(res1); // Logs "Promise 3 resolved!" after 10 second
    const res2 = await promise2;    
    console.log(res2); //logs "Promise 4 resolved!" after 10 seconds

}

//===============================================================================

//Real world example of async await

const api = "https://api.github.com/users/NehaWadhai";

async function fetchGitHubUser(){
    try{
        const data = await fetch(api); //fetching data from api
        const jsonValue = await data.json(); //converting data to json
    }catch(err){
        console.log("Error fetching data:", err);

    }
   
}


//==================================================================================

//constructor is private or not 
// ooverloading  and  overriding 