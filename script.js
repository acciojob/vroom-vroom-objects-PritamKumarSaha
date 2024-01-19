// Complete the js code
function Car(make, model) {
	this._make = make;
	this._model = model;
};
Car.prototype.getMakeModel = function() {
	return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	this.topSpeed = topSpeed;
};
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.getTopSpeed = function() {
	return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
