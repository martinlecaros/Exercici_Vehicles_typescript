var car;

function getValues (plate:string,brand:string,color:string) {
    debugger
    plate = (<HTMLInputElement>document.getElementById("inputPlate")).value;
    color = (<HTMLInputElement>document.getElementById("inputColor")).value;
    brand = (<HTMLInputElement>document.getElementById("inputBrand")).value;
    const PATTERN = new RegExp(/\d{4}[A-Za-z]{3}/);
    let isvalid = PATTERN.test(plate);
    if (plate.length === 0 || brand.length === 0 || color.length === 0) {
        (<HTMLInputElement>document.getElementById("carInfo")).innerText = `Complete all fields!`;  
    } else if (isvalid === false) {
        (<HTMLInputElement>document.getElementById("carInfo")).innerText = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        car = new Car(plate,color,brand);
        (<HTMLInputElement>document.getElementById("carInfo")).innerText = `Plate: ${car.plate}\nBrand: ${car.brand}\nColor: ${car.color}`;
    }  
}

function addWheels(car) {
    debugger
    const PATTERN_D = new RegExp(/\d+/);
    for(let i = 1; i<=4; i++) {
        
        let diametroStr = (<HTMLInputElement>document.getElementById("inputDiametroRueda"+i)).value;
        let diametroNum = Number(diametroStr);
        let marca = (<HTMLInputElement>document.getElementById("inputMarcaRueda"+i)).value;
        let isvalid = PATTERN_D.test(diametroNum);
        
        if (marca === "" || diametroNum === "0") {
            (<HTMLInputElement>document.getElementById("wheelsInfo")).innerText = `Complete all fields!`;
        } else if (isvalid === false) {
            (<HTMLInputElement>document.getElementById("wheelsInfo")).innerText = `The wheel's diameter must be a number`;
            car.deleteWheel();
        } else if (diametroNum < 0.4 || diametroNum > 2) {
            (<HTMLInputElement>document.getElementById("wheelsInfo")).innerText = `The wheel's diameter must be in between 0.4 and 2. Sorry...`;
            car.deleteWheel();
        } else { 
        car.addWheel(new Wheel(diametroNum, marca));
        }
    }
    (<HTMLInputElement>document.getElementById("wheelsInfo")).innerText = `Wheel 1\nDiameter: ${JSON.stringify(car.wheels[0].diameter)}\nBrand: ${JSON.stringify(car.wheels[0].brand)}\n\nWheel 2\nDiameter: ${JSON.stringify(car.wheels[1].diameter)}\nBrand: ${JSON.stringify(car.wheels[1].brand)}\n\nWheel 3\nDiameter: ${JSON.stringify(car.wheels[2].diameter)}\nBrand: ${JSON.stringify(car.wheels[2].brand)}\n\nWheel 4\nDiameter: ${JSON.stringify(car.wheels[3].diameter)}\nBrand: ${JSON.stringify(car.wheels[3].brand)}`
}
