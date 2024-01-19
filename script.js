// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
};
Car.prototype.getMakeModel = function() {
	return `${this.make} ${this.model}`;
};
// Constructor function for SportsCar
function SportsCar(make, model, topSpeed) {
	// call the Car constructor to initialize make and model
	Car.call(this, make, model);
	// additional property for topSpeed
	this.topSpeed = topSpeed;
};
// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
// Add a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
	return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
