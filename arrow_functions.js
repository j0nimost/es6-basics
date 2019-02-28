/**
 * Arrow functions.
 * 
 * This illurstrates the use of arrow functions vs normal functions
 * 
 * - Normal vs Arrow functions
 * - Object Methods
 * - Arrow return 
 */

 var date = new Date();

 function timeNormal(name) {
     let time = date.getHours() +  ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
     return name + ": " + time;
 };

 var timeArrow = parameter => {
    let time = date.getHours() +  ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
    return parameter + ": " + time;
 };

 var time_normal = timeNormal('normal function');
 var time_arrow = timeArrow('arrow function');

 // object functions
 const gm_motors = {
     brand: "Chevrolet",
     model: "Camaro Coupe",
     fullname: function(){
         return `Normal function: ${this.brand} ${this.model}`
     }
 };

 const tata_motors = {
     brand: "Jaguar",
     model: 'F-TYPE',
     fullname: () => {
         return `Arrow function: ${this.brand} ${this.model}`
         /**
          * We can't use this on arrow functions this is because
          * this in arrow functions is inherited from the execution context
          * 
          * this function will return undefined
          */
     }
 };


 // Implicit return
 const normalFunction = function() {
     return "Normal function";
 };

 const arrowFunction = () => 'Arrow function';


 (function(){
    console.log("\tFunction Declaration")
    console.log("\t------------------------\n")
    console.log(`\t${time_normal}\n`)
    console.log(`\t${time_arrow}\n`)

    console.log("\n\tObject functions")
    console.log("\t------------------------\n")
    console.log(`\t${gm_motors.fullname()}\n`)
    console.log(`\t${tata_motors.fullname()}\n`)

    console.log("\n\tImplicit return")
    console.log("\t------------------------\n")
    console.log(`\t${normalFunction()}\n`)
    console.log(`\t${arrowFunction()}\n`)
 })();
