
function createCar(plate:string,brand:string,color:string){

    plate = (<HTMLInputElement>document.getElementById("inputPlate")).value;
    color = (<HTMLInputElement>document.getElementById("inputColor")).value;
    brand = (<HTMLInputElement>document.getElementById("inputBrand")).value;

    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    
    if (plate === "" || brand === "" || color === "") {
        (<HTMLInputElement>document.getElementById("carInfo")).innerText = `You are missing one of the input fields`
        } else {
        (<HTMLInputElement>document.getElementById("carInfo")).innerText 
        = `THE CAR PLATE IS: ${car.plate}
        THE BRAND IS: ${car.brand}
        THE COLOR IS: ${car.color}`
        }
}