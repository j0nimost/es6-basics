/**
 * Playing around with Varibles in Javascript ES6
 *
 * Types declaration:
 * - var
 * - let
 * - const
 */

 var x = 40;

 var global_var = function globalVar(){
    //modify x
    x = x + 10;
    return x;
 };

 var let_var = function letVar(){
   // accessible only within scope
   let v = 20;
   console.log('\tInitial value: ', v);

   //modify v
   v = v +10;
   console.log('\tModified value: ', v);
   
   v = "Hello Jack!";
   console.log('\tChanging type: ', v)
 };

 var const_var = function constVar(){
   // accessible only within scope
   const pi = 3.142;
   return pi;
 };

 (function(){
    // declaring using var
    console.log("\tGlobal Variables:");
    console.log("\t-------------------\n");

    console.log('\tInitial value: ', x);
    console.log('\tModified value: ', global_var());

    // declaring using let
    console.log("\n\tScoped let Variables:");
    console.log("\t--------------------\n");
    let_var();

    // declaring using const
    console.log("\n\tConst Variables:");
    console.log("\t-------------------\n");
    console.log('\tConst value: ', const_var());

 })();