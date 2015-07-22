/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/

/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

function make() {
  this.makeName = "Chrylser";
  console.log(this)
}

/*
Create a function, Model, to hold the 
corresponding property and value
*/

 function model() {
  this.modelName = "Pt-Cruiser";
  console.log(this)
 }

// What is the prototype of a Model?


model.prototype = new make();
console.log()

// Define a Car

 function car() {

 }


// What is the prototype of a Car?

car.prototype = new model();
console.log()

// Create the first car

var firstCar = new car();
firstCar.color = "Red";
console.log('firstCar', firstCar)

// Create the second car

var secondCar = new car();
secondCar.color = "Blue";
console.log('secondCar', secondCar)

// Create the third car

var thridCar = new car();
thridCar.color = "White";
console.log('thridCar', thridCar)
