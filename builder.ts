class Car { }
class Manual { }

abstract class Builder {
    reset() { }
    setWheels() { }
    setColor() { }
}

class CarBuilder extends Builder {
    private car!: Car;
    reset() {
        this.car = new Car()
    }
    setColor() { }
    setWheels() { }
    getResult(): Car {
        return this.car;
    }
}

class ManualBuilder extends Builder {
    private manual!: Manual;
    reset() {
        this.manual = new Manual()
    }
    setColor() { }
    setWheels() { }
    getResult(): Manual {
        return this.manual;
    }
}

class Director {
    private builder: Builder;
    constructor(builder: Builder) {
        this.builder = builder;
    }
    createCar() {
        this.builder.setColor();
        this.builder.setWheels();
    }
    createManual(builder: Builder) {
        builder.setWheels();
        builder.setColor();
    }
}

let builderCar = new CarBuilder();
let builderManual = new ManualBuilder();

let director = new Director(builderCar);

director.createManual(builderManual);

let car = builderCar.getResult();
let manual = builderManual.getResult();