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
//===========================================

const a = {}; 
const f = { key: 'b' }; const t = { key: 'c' };

a[b] = 123; a[c] = 456;

console.log(a[b]);//456 [object object] = 465

//===========================================

const user = { name: 'Lydia', age: 21 }; 
const admin = { admin: true, ...user };

console.log(admin); //{ admin: true, name: "Lydia", age: 21 }
//===========================================

const settings = { username: 'lydiahallie', level: 19, health: 90, };

const data = JSON.stringify(settings, ['level', 'health']); console.log(data);// "{"level":19,"health":90}"
const data2 = JSON.stringify(settings) // '{"username":"lydiahallie","level":19,"health":90}'
//it will only include level and health properties in the stringified JSON as we mentioned in array

//=== ========================================

const shape = { radius: 10, diameter() { return this.radius * 2; }, perimeter: () => 2 * Math.PI * this.radius, };
console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NaN // because arrow function does not bind its own this it will refer to window object

//=========================================== =======
let userOne={ name:"Neha", age:24 }

const {name : myName}= user;

console.log(myName);//Neha

//=========================================== =======

function getItems(fruitList, ...args, favoriteFruit) { return [...fruitList, ...args, favoriteFruit] }

getItems(["banana", "apple"], "pear", "orange") //SyntaxError: Rest parameter must be last formal parameter

//===================================================

let y = { greeting: 'Hey!' };
let d;

d = y;
c.greeting = 'Hello';
console.log(d.greeting); // Hello because its provided reference type

//===================================================

console.log({a:1} == {a:1});
console.log({a:1} === {a:1}); //false 
//because both are different objects in memory
//In the above statement, we are comparing two different objects so their references will be different. 
//Hence, we get the output as false for both of the statements.

//=======================================================

let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);//[ { name: 'Lydia' } ]
//We are only modifying the value of the person variable, and not the first element in the array, 
//since that element has a different (copied) reference to the object. The first element in members 
//still holds its reference to the original object. When we log the members array, 
//the first element still holds the value of the object, which gets logged.

//=======================================================
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();//20
multiply();//20
multiply(value);//20
multiply(value);//40

// In ES6, we can initialize parameters with a default value. The value of the parameter 
// will be the default value, if no other value has been passed to the function, or if the value of the parameter 
// is "undefined". In this case, we spread the properties of the value object into a new object, 
// so x has the default value of { number: 10 }.

// The default argument is evaluated at call time! Every time we call the function, a new object is created. 
// We invoke the multiply function the first two times without passing a value: x has the default value of { number: 10 }. 
// We then log the multiplied value of that number, which is 20.

// The third time we invoke multiply, we do pass an argument: the object called value. 
// The *= operator is actually shorthand for x.number = x.number * 2: we modify the value of x.number, 
// and log the multiplied value 20.

// The fourth time, we pass the value object again. x.number was previously modified to 20, so x.number *= 2logs 40.

//=======================================================

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: 'John',
      age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?
//personObj1 = { name: 'Alex', age: 25 }
//personObj2 = { name: 'John', age: 50 }
//The function first changes the property age on the original object it was passed in. 
// It then reassigns the variable to a brand new object and returns that object. 
// Here’s what the two objects are logged out.


//=======================================================

const user5={
    name: 'Jen',
    age: 26
};

const copyOfUser =user5;
console.log(user5, 'user5'); //{ name: 'Jen', age: 26 } user

console.log('------------After Modification-----------');
copyOfUser.age = 24;
/*
Here you would expect user object wouldn't change, but copyOfUser 
and user object both share same memory address
*/
console.log(user5, 'user5');// ------------After Modification-----------
//{ name: 'Jen', age: 24 } user

//==================================================

const user6 = {
    name: "Jen",
    age: 26
}
console.log("=========Deep Copy========");
const copyOfUser1 = JSON.parse(JSON.stringify(user6));
console.log("User=> ",user6);
console.log("copyOfUser=> ", copyOfUser1);
/*
=========Deep Copy========
User=>  { name: 'Jen', age: 26 }
copyOfUser=>  { name: 'Jen', age: 26 }
*/
console.log("---------After modification---------");
copyOfUser1.name = "Neha";
copyOfUser1.age = 24;
/*
Here user object will not change
*/
console.log("User=> ",user6);
console.log("copyOfUser=> ",copyOfUser1);
/*
---------After modification---------
user=>  { name: 'Jen', age: 26 }
copyOfUser=>  { name: 'Piyush', age: 24 }
*/
//===========================================================
//below are the ways to clone object
const obj = {a: 1 ,b: 2}
const objclone1 = Object.assign({},obj);
const objclone3 = JSON.parse(JSON.stringify(employee));
const objclone = { ...obj }







