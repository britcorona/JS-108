/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

function Make() {
  this.makeName = "Chrylser";
  console.log(this)
}

/*
Create a function, Model, to hold the 
corresponding property and value
*/

 function Model() {
  this.modelName = "Pt-Cruiser";
  console.log(this)
 }

// What is the prototype of a Model?


Model.prototype = new Make();
console.log()

// Define a Car

 function Car() {

 }


// What is the prototype of a Car?

Car.prototype = new Model();
console.log()

// Create the first car

var firstCar = new Car();
firstCar.color = "Red";
console.log('firstCar', firstCar)

// Create the second car

var secondCar = new Car();
secondCar.color = "Blue";
console.log('secondCar', secondCar)

// Create the third car

var thridCar = new Car();
thridCar.color = "White";
console.log('thridCar', thridCar)
