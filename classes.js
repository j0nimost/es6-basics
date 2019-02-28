/**
 * Classes
 * 
 * This illurstrates Classes in JavaScript
 * - Class definition
 * - Inheritance
 * - Getter and Setter
 */

 // class sample
 class Greet{
     constructor(name){
         this.name = name
     }

     greetings(){
         console.log(`\tHello ${this.name}`)
     }
 }

 // inherintance sample
 class Animal{
     constructor(name){
         this.name = name
     }

     animalSound(){
         return `\t${this.name} makes this sound: `
     }
 }

 class Cat extends Animal{
    constructor(){
        super('Cat')
    }

    animalSound(){
        return super.animalSound() + ' Meow'
    }
 }

 // Getters and Setters
 class Person {
     constructor(name){
         this.name = name
     }

     set setname(value) {
         this.name = value
     }

     get getname(){
         return this.name
     }
 }


 (function(){
     console.log('\tClass Implementation')
     greet = new Greet('John')
     greet.greetings()

     console.log('\n')
     console.log('\tClass Inheritance')
     cat = new Cat()
     sound = cat.animalSound()
     console.log(sound)


     console.log('\n')
     console.log('\tGetter and Setter')
     me = new Person('Nyingi')
     console.log(`\tGet my name: ${me.name}`)
     me.setname = 'John Nyingi'
     console.log(`\tMy new name: ${me.name}`)
 })()