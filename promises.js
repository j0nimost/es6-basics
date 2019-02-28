/**
 * Promises
 * 
 * This will illustrate how to create Promises
 * - Chaining Promises
 */

 require('es6-promise').polyfill();
 require('isomorphic-fetch');

 const status = response => {
     if(response.status >= 200 && response.status < 300 ) {
         return Promise.resolve(response);
     }
     return Promise.reject(new Error(response.statusText));
 }

 const json = response => response.json();

 fetch('https://api.myjson.com/bins/17o5i2')
     .then(status)
     .then(json)
     .then((data) => {console.log('\tRequest was successfull: \n', data)})
     .then( async () => await dosomething())
     .catch((error) => {console.log('\tError occured: \n', error)});

// Async function
 const dosomethingAsync = () => {
     return new Promise( resolve => {
         setTimeout(() => resolve('\tAsync did something'), 1000);
     })
 }

 const dosomething = async () => {
     console.log("\n\n\tAsync Methods")
     console.log("\t-----------------")
     console.log(await dosomethingAsync());
 }

  
 (function(){
     console.log("\tPromises Implementations")
     console.log('\t-------------------------')

 })()