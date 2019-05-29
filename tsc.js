"use strict";
function createCar(plate, brand, color) {
    plate = document.getElementById("inputPlate").value;
    color = document.getElementById("inputColor").value;
    brand = document.getElementById("inputBrand").value;
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    if (plate === "" || brand === "" || color === "") {
        document.getElementById("carInfo").innerText = "You are missing one of the input fields";
    }
    else {
        document.getElementById("carInfo").innerText
            = "THE CAR PLATE IS: " + car.plate + "\n        THE BRAND IS: " + car.brand + "\n        THE COLOR IS: " + car.color;
    }
}
var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    return Car;
}());
var Wheel = /** @class */ (function () {
    function Wheel(diameter, brand) {
        this.diameter = diameter;
        this.brand = brand;
    }
    return Wheel;
}());
