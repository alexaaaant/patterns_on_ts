class Subsystem1 {
    operation1() {
        console.log('sub 1 oper1')
    }

    operation2() {
        console.log('sub 1 oper2')
    }
}

class Subsystem2 {
    operation1() {
        console.log('sub 2 oper1')
    }

    operation2() {
        console.log('sub 2 oper2')
    }
}

class Facade {
    protected sub1: Subsystem1;
    protected sub2: Subsystem2;
    constructor(subsystem1: Subsystem1, subsystem2: Subsystem2) {
        this.sub1 = subsystem1 || new Subsystem1();
        this.sub2 = subsystem2 || new Subsystem2();
    }

    operation() {
        this.sub2.operation2();
        this.sub1.operation1();
        this.sub2.operation1();
        this.sub1.operation2();
    }
}

let sub1 = new Subsystem1();
let sub2 = new Subsystem2();
let facade = new Facade(sub1, sub2);
facade.operation();
