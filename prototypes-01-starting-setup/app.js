class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'max';

  constructor() {
    super();
    this.age = 30;
    //this.greet(){...}; makes the func part of the code
  }
  //greet=()=>{...}; makes the func part of the code
  /**
   * adding this arrow func to btn wont requir using bind()
   * because it will outomatically reffer to the class's variables
   */

  greet() {//the func isnt part of the class, better impact on the memory
    /**
     * adding this func to a button,
     * requier adding bind() when calling,
     * because "this" will refere to the prototype not to the varibale
     */
    
    console.log("Hello I'm " + this.name + " and I'm " + this.age);
  }
}

//same as above

// function Person() {
//   //constructor function
//   this.name = 'max';
//   this.age = 30;
// //   this.greet = function () {//the func will be part of the constructor function
// //     console.log("Hello I'm " + this.name + " and I'm " + this.age);
// //   };
// }

// Person.prototype.greet=function () {//now this func will behave the same as class behave with functions
//          console.log("Hello I'm " + this.name + " and I'm " + this.age);
//        };

// Person.describe = function () {
//   console.log('creates persons...');
// };

//this will replace the constructor method from the prototype
// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// //the better approach:
// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor(); //good approach if we cant reach to Person() anymore
// console.log(p2);

// console.log(Object);
// console.dir(Object.prototype);

const p = new Person();
console.log(p);
