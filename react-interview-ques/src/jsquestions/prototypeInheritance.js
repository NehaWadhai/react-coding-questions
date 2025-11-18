Array.prototype = Object
Object.__proto = null
//whenebever any object /array is declared it has the propto type
//An object can use properties or methods defined on another object (its prototype).

let obj1 = {
    name: 'neha',
    getIntro: () =>{
        return `Hello, my name is ${this.name}`;
    }
}

let obj2 = {
    name: 'rahul',
}

obj2.__proto__ = obj1; // Set obj1 as the prototype of obj2
console.log(obj2.getIntro()); // Hello, my name is undefined