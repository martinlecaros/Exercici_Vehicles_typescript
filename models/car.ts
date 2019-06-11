class Car {
    private plate:string;
    private color:string;
    private brand:string;
    private wheels:Wheel[] = new Array();
    
    constructor(plate:string,color:string,brand:string) {
        this.plate=plate;
        this.color=color;
        this.brand=brand;
    }
    
    addWheel(wheel:Wheel):void {
        this.wheels.push(wheel);
    }
    

    deleteWheel():void {
        this.wheels = [];
    }
}