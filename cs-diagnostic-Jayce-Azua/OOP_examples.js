// #Problem 12

function AutoMobile (numberOfWheels, make, model, color, topSpeed) {
	this.numberOfWheels = numberOfWheels;
	this.make = make;
	this.model = model;
	this.color = color;
	this.topSpeed = topSpeed
}

AutoMobile.prototype.honk = function() {
	console.log("Beep Beep!");
}
AutoMobile.prototype.description = function() {
	console.log(this.make + " " + this.model + " has " + this.numberOfWheels + ", also the color is " + this.color + " and can go as fast as " + this.topSpeed);
}

//  Car
function Car (make, model, color, topSpeed) {
	this.numberOfWheels = 4;
	this.make = make;
	this.model = model;
	this.color = color;
	this.topSpeed = topSpeed
}
Car.prototype = Object.create(AutoMobile.prototype);
Car.prototype.constructor = Car;
var honda = new Car("BMW", "M3", "white", 200);

// SemiTruck
function SemiTruck (make, model, color, topSpeed) {
	this.numberOfWheels = 6;
	this.make = make;
	this.model = model;
	this.color = color;
	this.topSpeed = topSpeed
}
SemiTruck.prototype = Object.create(AutoMobile.prototype);
SemiTruck.prototype.constructor = SemiTruck;
var ford = new SemiTruck(6, "Ford", "350", "red", 150);
//  MotorCycle
function MotorCycle (make, model, color, topSpeed) {
	this.numberOfWheels = 2;
	this.make = make;
	this.model = model;
	this.color = color;
	this.topSpeed = topSpeed
}
MotorCycle.prototype = Object.create(AutoMobile.prototype);
MotorCycle.prototype.constructor = MotorCycle;
var yamaha = new MotorCycle("Yamaha", "600R", "black", 220);

/*
// #Problem 10
function Car (numberOfWheels, make, model, color, topSpeed) {
	this.numberOfWheels = numberOfWheels;
	this.make = make;
	this.model = model;
	this.color = color;
	this.topSpeed = topSpeed
}

Car.prototype.honk = function() {
	console.log("Beep Beep!");
}

Car.prototype.description = function() {
	console.log(this.make + " " + this.model + " has " + this.numberOfWheels + ", also the color is " + this.color + " and can go as fast as " + this.topSpeed);
}
*/
