interface Implementation {
    doSomething(): any
    doSomethingElse(): any
}

class ConcreteImplementation implements Implementation {
    doSomething() { };
    doSomethingElse() { };
}

class Absraction {
    protected imp: Implementation;
    constructor(imp: Implementation) {
        this.imp = imp;
    }

    doAnything() {
        this.imp.doSomething();
        this.imp.doSomethingElse();
    }
}

class ExpandAbstraction extends Absraction {
    doExpAnything() {
        this.imp.doSomethingElse();
        this.imp.doSomething();
    }
}

const imp = new ConcreteImplementation();
const abs = new Absraction(imp);

abs.doAnything();

const expImp = new ConcreteImplementation();
const expAbs = new ExpandAbstraction(expImp);

expAbs.doExpAnything();