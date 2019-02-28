/**
 * Rest and Spread:
 * 
 * This illurstrates the little known ES6 features:
 * - Rest
 * - Spread
 * - Destructuring
 */


// swap values using rest
 function swapValues(){
    let a = 'This'
    let b = 'That'
    
    console.log(`\tInitial a: ${a}, b: ${b}`);
    
    [a, b] = [b, a]
    console.log(`\tSwapped a: ${a}, b: ${b}`)
 }

 // spread in lists
 const cars = ['Jaguar', 'Range Rover', 'Ferrari', 'Lamboghini', 'Alfa Romeo']
 
 //  we can copy the list
 var cars_cp = [...cars]
 var deconstruct_list = [Jaguar, Range, ...italian] = cars
 // assign using rest, ignore Jaguar
 var [ ,Rover,...italian] = deconstruct_list
 
 // spread lists in functions
 var myItalianCars = ([,,...italian]) => {
    //ignore the first 2 elements
    console.log(`\tMy Italian Cars: ${italian}`)
 }

 // spread in function
 var forexMarket = (usd, euro, ...others) => {
    // print the USD
    console.log(`\tFirst Currency: ${usd}`)
    console.log(`\tSecond Currency: ${euro}`)
    console.log(`\tAll Other Currencies: ${others}`)
 }

  // Destructure in objects
  const { Kenya, Italy, Spain }= { 
   Kenya: 'Nairobi', 
   Italy: 'Rimini', 
   Spain: 'Madrid'
  };


 (function(){
    console.log("\tRest in Objects")
    console.log('\t-------------\n')
    console.log('\tDestructuring objects...')
    console.log(`\tCities: ${Kenya}. ${Italy}. ${Spain}\n`)

    console.log("\tSwap values with Rest")
    console.log('\t-------------\n')
    swapValues()

    console.log("\Spread in Lists")
    console.log('\t-------------\n')
    console.log(`\tOriginal list: ${cars}`)
    console.log(`\tCopy list: ${cars_cp}`)
    console.log(`\tAssign using rest: ${Rover}, ${italian}\n`)

    console.log("\tSpread in function")
    console.log('\t--------------\n')
    forexMarket('USD', 'EURO', 'YEN', 'POUND', 'Rupi', 'Franq', 'Ksh')
    myItalianCars(cars)

    console.log("\n\tDestructure Objects")
    console.log("\t---------------\n")
    console.log(`\tDestructure list: ${Jaguar}, ${Range}`)
 })();
