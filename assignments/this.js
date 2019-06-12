/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global
* 2. Implicit
* 3. NewBinding
* 4. Explicit
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// function isFunction(thisFunction){
//     console.log(this);
//     return thisFunction;
// }
// isFunction('function here');

// Principle 2

// code example for Implicit Binding
// const myObj = {
//     greeting: 'hello',
//     saysHello: function(name){
//         console.log(`This ${this.greeting} my name is ${name}`)
//     }
// }
// myObj.saysHello('ryan')
// Principle 3

// code example for New Binding
// function greetsPerson(greeter){
//     this.greeting = 'Hello ';
//     this.greeter = greeter;
//     this.speak = function (){
//         console.log(this.greeting + this.greeter);
//         console.log(this);
//     }
// }

// const ryan= new greetsPerson('test');

// ryan.speak();

// Principle 4

// code example for Explicit Binding