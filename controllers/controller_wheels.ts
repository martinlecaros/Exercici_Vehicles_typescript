const PATTERN = new RegExp(/\d+/);
var diametro:Number
var marca:String;

function getValuesWheels() {

    for(let i=1; i<=4; i++) {
        diametro = document.querySelector("#inputDiametroRueda" + i).value;
        marca = document.querySelector("#inputMarcaRueda" + i).value;

        if(diametro === "" || marca === "") {
            document.querySelector("#wheelsInfo").innerHTML = `Complete all fields!`;
            car.deleteWheel();
            break
        }
        diametro = Number(diametro);
        let valida = PATTERN.test(diametro);
        if(!valida) {
            document.querySelector("#wheelsInfo").innerHTML = `The wheel's diameter must be a number`;
            car.deleteWheel();
            break
        }

        if(diametro < 0.4 || diametro > 2 || diametro === NaN) {
            document.querySelector("#wheelsInfo").innerHTML = `The wheel's diameter must be a number in between 0.4 and 2`;
            car.deleteWheel();
            break
        }
        car.addWheel(new Wheel(diametro,marca));
        if (i===4) {
            printWheels();
        }
    } 
}


function printWheels() {

    var selector = document.querySelector(".row.d-flex > :first-child");
    selector.parentNode.removeChild(selector);

    document.querySelector("#wheelsInfo").innerHTML = 
    `<div class="row">
        <div class="col-lg-6">
            <p class="res">                      
            Wheel 1 Diameter: <span class="span">${car.wheels[0].diameter}</span><br>
            Wheel 1 Brand: <span class="span">${car.wheels[0].brand}</span><br><br>
                
            Wheel 2 Diameter: <span class="span">${car.wheels[1].diameter}</span><br>
            Wheel 2 Brand: <span class="span">${car.wheels[1].brand}</span><br><br>
            </p>
        </div>
        <div class="col-lg-6">
            <p class="res">
            Wheel 3 Diameter: <span class="span">${car.wheels[2].diameter}</span><br>
            Wheel 3 Brand: <span class="span">${car.wheels[2].brand}</span><br><br>
            
            Wheel 4 Diameter: <span class="span">${car.wheels[3].diameter}</span><br>
            Wheel 4 Brand: <span class="span">${car.wheels[3].brand}</span>
            </p>
        </div>
    </div>`   

    document.querySelector("#reset").innerHTML = 
    `<div class="col-lg-12">
        <a href="index.html"><button type="submit" class="btn btn-primary">Reset</button></a>
    </div>` 
}