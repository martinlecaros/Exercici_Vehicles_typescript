var car: Car;

window.addEventListener('load', () => document.querySelector("#btncar").addEventListener("click", getValuesCar, false));

var getValuesCar = (): void => {
    let plate = document.querySelector("#inputPlate").value;
    let color = document.querySelector("#inputColor").value;
    let brand = document.querySelector("#inputBrand").value;
    validateCarData(plate,color,brand); 
}

function validateCarData (plate,color,brand) {
    const PATTERN:RegExp = new RegExp(/\d{4}[A-Za-z]{3}/);
    let valida = PATTERN.test(plate);
    
    if (plate.length > 0 && color.length > 0 && brand.length > 0) {
        if(valida) {
            createCarObj(plate,color,brand);
        } else {
            document.querySelector("#carInfo").innerHTML = `The plate must has 4 numbers follow by 3 letters. You enter this: <span class="span">${plate}</span>`;  
        }
    } else {
        document.querySelector("#carInfo").innerHTML = `Complete all fields!`;  
    } 
}


function createCarObj(plate:String,color:String,brand:String) {
    
    car = new Car(plate,color,brand);

    document.querySelector("#carInfo").innerHTML = 
    `<p class="res">
    Car Plate: <span class="span">${car.plate}</span><br>
    Car Color: <span class="span">${car.color}</span><br>
    Car Brand: <span class="span">${car.brand}</span></p>`
    
    var selector = document.querySelector(".row.d-flex > :first-child");
    selector.parentNode.removeChild(selector);

    var div = document.createElement("div");  
    document.querySelector(".row.d-flex").prepend(div);
    document.querySelector(".row.d-flex > :first-child").setAttribute("class", "col-lg-6 mt-5 mt-lg-0");
    document.querySelector(".row.d-flex > :first-child").innerHTML = 
    `<form onsubmit="return false">
            <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="inputDiametroRueda1">Diameter Wheel 1</label>
                            <input type="text" class="input form-control" id="inputDiametroRueda1" required>
                        </div>
                        <div class="form-group">
                            <label for="inputMarcaRueda1">Brand Wheel 1</label>
                            <input type="text" class="input form-control" id="inputMarcaRueda1" required>
                        </div>
                        <div class="form-group">
                            <label for="inputDiametroRueda2">Diameter Wheel 2</label>
                            <input type="text" class="input form-control" id="inputDiametroRueda2" required>
                        </div>
                        <div class="form-group">
                            <label for="inputMarcaRueda2">Brand Wheel 2</label>
                            <input type="text" class="input form-control" id="inputMarcaRueda2" required>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="inputDiametroRueda3">Diameter Wheel 3</label>
                            <input type="text" class="input form-control" id="inputDiametroRueda3" required>
                        </div>
                        <div class="form-group">
                            <label for="inputMarcaRueda3">Brand Wheel 3</label>
                            <input type="text" class="input form-control" id="inputMarcaRueda3" required>
                        </div>
                        <div class="form-group">
                            <label for="inputDiametroRueda4">Diameter Wheel 4</label>
                            <input type="text" class="input form-control" id="inputDiametroRueda4" required>
                        </div>
                        <div class="form-group">
                            <label for="inputMarcaRueda4">Brand Wheel 4</label>
                            <input type="text" class="input form-control" id="inputMarcaRueda4" required>
                        </div>
                    </div>
            </div>
            <div class="row">
                    <div class="col-lg-12">
                        <button type="submit" class="btn btn-primary" id="btnaddwheels">Add wheels</button>
                    </div>
            </div>
        </form>`;

        document.querySelector("#btnaddwheels").addEventListener("click", getValuesWheels, false);

}