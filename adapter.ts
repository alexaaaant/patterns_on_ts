class RoundHole {
    private radius: number;
    getRadius() { }
    fits(roundPeg: RoundPeg) {
        return this.radius >= roundPeg.getRadius();
    }
}

class RoundPeg {
    private radius: number;
    constructor(radius?) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
}

class Square {
    private weight: number;
    getWidth() {
        return this.weight;
    }
}

class SquarePegAdapter extends RoundPeg {
    private square: Square;
    constructor(square: Square) {
        super();
        this.square = square;
    }
    getRadius() {
        return this.square.getWidth() * 10;
    }
}
let s = new Square();
let spa = new SquarePegAdapter(s)
let a = new RoundHole();
a.fits(spa);



class Target {
    required() {
        console.log('required')
    }
}

class Adaptee {
    specificRequired() {
        console.log('awdad')
    }
}

class Adapter extends Target {
    private adaptee: Adaptee;
    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }
    required() {
        this.adaptee.specificRequired();
        // какие то действия
        return 'result'
    }
}

function clientCode(target: Target) {
    target.required()
}
let z = new Adaptee();
let x = new Adapter(z);
clientCode(x);