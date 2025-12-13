//this keyword in JavaScript Functions and arrow functions 
//arrow function does not have its own this , it takes this from the parent normal function if it does
//not have parent normal function then it takes this from global object
//this refer to the object that function is property of


let user = {
    name: 'Alice',
    getDetails:() =>{
        console.log(this.name)
    }

}

user.getDetails() // undedfined

//with normal function

let user2 = {
    name: 'Alice',
    getDetail(){
        console.log(this.name)
    }

}

user2.getDetails() // Alice 

//Arrow function does not have its own this , it takes this from the surrounding context where it is defined

let user3 = {   
    name: 'Alice',
    getDetails(){
        const arrowFunc = () => {
            console.log(this.name)
        }
        arrowFunc()
    }
}

user3.getDetails() // Alice
//In the above example arrowFunc is defined inside getDetails method , so this inside arrowFunc refers to user3 object

//input output question

let user4 ={
    name: 'Alice',
    greet(){
      let name= 'Neha'
      return this.name
    }
}

user4.greet() // Alice

//==================================================================

 function greet(){
    return {
        name: 'Alice',
        ref: this,
    }
 }

 greet().ref.name // undefined because this inside greet function refers to global object

 function greet2(){
    return {
        name: 'Alice',
        ref(){
            return this.name
        },
    }
 }

 greet().ref.name //Alcie because this inside ref method refers to the object returned by greet2 function

 //==================================================================

 var length = 10
 function callback(){
    console.log(this.length)
 }  

    const obj = {
        length: 5,
        method(fn){
            fn()
        }
    }

obj.method(callback) // 10 because this inside callback refers to global object

//==================================================================

var length = 10
function callback(){
   console.log(this.length)
}  

   const obj1 = {
       length: 5,
       method(){
           arguments[0]()
       }
   }

obj1.method([callback,2])// 2 because this inside callback refers to arguments object which has length 3

//========================================

let user1 = {
    name: "Neha",
    age: 24,
      getDetails() {
          console.log(this.name); //Neha
      }
  };

  //==========================================

  let user5 = {
    name: "Nhea",
    age: 24,
      childObj:{
          newName:"Roadside Coder",
          getDetails() {
              console.log(this.newName, "and" ,this.name); // Roadside Coder and undefined
          }
      }
  };
  //===========================================

  let user6 = {
    name: "Neha ",
    age: 24,
      getDetails: () => {
          console.log(this.name);  // arrow function refers to the its parent function since it does not have parent function hence 
                                      // it refers to global object so undefined
      }
  };

  //==========================================

  let user7 = {
    name: "Neha",
    age: 24,
      getDetails() {
          const nestedArrow = () => console.log(this.name); //Neha
          nestedArrow();// because the arrow function takes this from its parent function
      }
  };
  
  
  
  