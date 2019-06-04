"use strict";
var car;
function getValues(plate, brand, color) {
    debugger;
    plate = document.getElementById("inputPlate").value;
    color = document.getElementById("inputColor").value;
    brand = document.getElementById("inputBrand").value;
    var PATTERN = new RegExp(/\d{4}[A-Za-z]{3}/);
    var isvalid = PATTERN.test(plate);
    if (plate.length === 0 || brand.length === 0 || color.length === 0) {
        document.getElementById("carInfo").innerText = "Complete all fields!";
    }
    else if (isvalid === false) {
        document.getElementById("carInfo").innerText = "The plate must has 4 numbers follow by 3 letters.";
    }
    else {
        car = new Car(plate, color, brand);
        document.getElementById("carInfo").innerText = "Plate: " + car.plate + "\nBrand: " + car.brand + "\nColor: " + car.color;
    }
}
function addWheels(car) {
    debugger;
    var PATTERN_D = new RegExp(/\d+/);
    for (var i = 1; i <= 4; i++) {
        var diametroStr = document.getElementById("inputDiametroRueda" + i).value;
        var diametroNum = Number(diametroStr);
        var marca = document.getElementById("inputMarcaRueda" + i).value;
        var isvalid = PATTERN_D.test(diametroNum);
        if (marca === "" || diametroNum === "0") {
            document.getElementById("wheelsInfo").innerText = "Complete all fields!";
        }
        else if (isvalid === false) {
            document.getElementById("wheelsInfo").innerText = "The wheel's diameter must be a number";
            car.deleteWheel();
        }
        else if (diametroNum < 0.4 || diametroNum > 2) {
            document.getElementById("wheelsInfo").innerText = "The wheel's diameter must be in between 0.4 and 2. Sorry...";
            car.deleteWheel();
        }
        else {
            car.addWheel(new Wheel(diametroNum, marca));
        }
    }
    document.getElementById("wheelsInfo").innerText = "Wheel 1\nDiameter: " + JSON.stringify(car.wheels[0].diameter) + "\nBrand: " + JSON.stringify(car.wheels[0].brand) + "\n\nWheel 2\nDiameter: " + JSON.stringify(car.wheels[1].diameter) + "\nBrand: " + JSON.stringify(car.wheels[1].brand) + "\n\nWheel 3\nDiameter: " + JSON.stringify(car.wheels[2].diameter) + "\nBrand: " + JSON.stringify(car.wheels[2].brand) + "\n\nWheel 4\nDiameter: " + JSON.stringify(car.wheels[3].diameter) + "\nBrand: " + JSON.stringify(car.wheels[3].brand);
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
    Car.prototype.deleteWheel = function () {
        this.wheels = [];
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
