"use strict";
var car;
window.addEventListener('load', function () { return document.querySelector("#btncar").addEventListener("click", getValuesCar, false); });
var getValuesCar = function () {
    var plate = document.querySelector("#inputPlate").value;
    var color = document.querySelector("#inputColor").value;
    var brand = document.querySelector("#inputBrand").value;
    validateCarData(plate, color, brand);
};
function validateCarData(plate, color, brand) {
    var PATTERN = new RegExp(/\d{4}[A-Za-z]{3}/);
    var valida = PATTERN.test(plate);
    if (plate.length > 0 && color.length > 0 && brand.length > 0) {
        if (valida) {
            createCarObj(plate, color, brand);
        }
        else {
            document.querySelector("#carInfo").innerHTML = "The plate must has 4 numbers follow by 3 letters. You enter this: <span class=\"span\">" + plate + "</span>";
        }
    }
    else {
        document.querySelector("#carInfo").innerHTML = "Complete all fields!";
    }
}
function createCarObj(plate, color, brand) {
    car = new Car(plate, color, brand);
    document.querySelector("#carInfo").innerHTML =
        "<p class=\"res\">\n    Car Plate: <span class=\"span\">" + car.plate + "</span><br>\n    Car Color: <span class=\"span\">" + car.color + "</span><br>\n    Car Brand: <span class=\"span\">" + car.brand + "</span></p>";
    var selector = document.querySelector(".row.d-flex > :first-child");
    selector.parentNode.removeChild(selector);
    var div = document.createElement("div");
    document.querySelector(".row.d-flex").prepend(div);
    document.querySelector(".row.d-flex > :first-child").setAttribute("class", "col-lg-6 mt-5 mt-lg-0");
    document.querySelector(".row.d-flex > :first-child").innerHTML =
        "<form onsubmit=\"return false\">\n            <div class=\"row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"form-group\">\n                            <label for=\"inputDiametroRueda1\">Diameter Wheel 1</label>\n                            <input type=\"text\" class=\"input form-control\" id=\"inputDiametroRueda1\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputMarcaRueda1\">Brand Wheel 1</label>\n                            <input type=\"text\" class=\"input form-control\" id=\"inputMarcaRueda1\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputDiametroRueda2\">Diameter Wheel 2</label>\n                            <input type=\"text\" class=\"input form-control\" id=\"inputDiametroRueda2\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputMarcaRueda2\">Brand Wheel 2</label>\n                            <input type=\"text\" class=\"input form-control\" id=\"inputMarcaRueda2\" required>\n                        </div>\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                        <div class=\"form-group\">\n                            <label for=\"inputDiametroRueda3\">Diameter Wheel 3</label>\n                            <input type=\"text\" class=\"input form-control\" id=\"inputDiametroRueda3\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputMarcaRueda3\">Brand Wheel 3</label>\n                            <input type=\"text\" class=\"input form-control\" id=\"inputMarcaRueda3\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputDiametroRueda4\">Diameter Wheel 4</label>\n                            <input type=\"text\" class=\"input form-control\" id=\"inputDiametroRueda4\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputMarcaRueda4\">Brand Wheel 4</label>\n                            <input type=\"text\" class=\"input form-control\" id=\"inputMarcaRueda4\" required>\n                        </div>\n                    </div>\n            </div>\n            <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <button type=\"submit\" class=\"btn btn-primary\" id=\"btnaddwheels\">Add wheels</button>\n                    </div>\n            </div>\n        </form>";
    document.querySelector("#btnaddwheels").addEventListener("click", getValuesWheels, false);
}
var PATTERN = new RegExp(/\d+/);
var diametro;
var marca;
function getValuesWheels() {
    for (var i = 1; i <= 4; i++) {
        diametro = document.querySelector("#inputDiametroRueda" + i).value;
        marca = document.querySelector("#inputMarcaRueda" + i).value;
        if (diametro === "" || marca === "") {
            document.querySelector("#wheelsInfo").innerHTML = "Complete all fields!";
            car.deleteWheel();
            break;
        }
        diametro = Number(diametro);
        var valida = PATTERN.test(diametro);
        if (!valida) {
            document.querySelector("#wheelsInfo").innerHTML = "The wheel's diameter must be a number";
            car.deleteWheel();
            break;
        }
        if (diametro < 0.4 || diametro > 2 || diametro === NaN) {
            document.querySelector("#wheelsInfo").innerHTML = "The wheel's diameter must be a number in between 0.4 and 2";
            car.deleteWheel();
            break;
        }
        car.addWheel(new Wheel(diametro, marca));
        if (i === 4) {
            printWheels();
        }
    }
}
function printWheels() {
    var selector = document.querySelector(".row.d-flex > :first-child");
    selector.parentNode.removeChild(selector);
    document.querySelector("#wheelsInfo").innerHTML =
        "<div class=\"row\">\n        <div class=\"col-lg-6\">\n            <p class=\"res\">                      \n            Wheel 1 Diameter: <span class=\"span\">" + car.wheels[0].diameter + "</span><br>\n            Wheel 1 Brand: <span class=\"span\">" + car.wheels[0].brand + "</span><br><br>\n                \n            Wheel 2 Diameter: <span class=\"span\">" + car.wheels[1].diameter + "</span><br>\n            Wheel 2 Brand: <span class=\"span\">" + car.wheels[1].brand + "</span><br><br>\n            </p>\n        </div>\n        <div class=\"col-lg-6\">\n            <p class=\"res\">\n            Wheel 3 Diameter: <span class=\"span\">" + car.wheels[2].diameter + "</span><br>\n            Wheel 3 Brand: <span class=\"span\">" + car.wheels[2].brand + "</span><br><br>\n            \n            Wheel 4 Diameter: <span class=\"span\">" + car.wheels[3].diameter + "</span><br>\n            Wheel 4 Brand: <span class=\"span\">" + car.wheels[3].brand + "</span>\n            </p>\n        </div>\n    </div>";
    document.querySelector("#reset").innerHTML =
        "<div class=\"col-lg-12\">\n        <a href=\"index.html\"><button type=\"submit\" class=\"btn btn-primary\">Reset</button></a>\n    </div>";
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
