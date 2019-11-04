interface IChair {
    getNozhki(): number;
}

interface ITable {
    getArea(): number;
}

class ChairA implements IChair {
    getNozhki() {
        return 2;
    }
}

class TableA implements ITable {
    getArea() {
        return 2;
    }
}

class ChairB implements IChair {
    getNozhki() {
        return 4;
    }
}

class TableB implements ITable {
    getArea() {
        return 4;
    }
}

abstract class FactoryM {
    abstract createChair(): IChair;
    abstract createTable(): ITable;
}

class FactoryA extends FactoryM {
    createChair(): ChairA {
        return new ChairA();
    }
    createTable(): TableA {
        return new TableA();
    }
}

class FactoryB extends FactoryM {
    createChair(): ChairB {
        return new ChairB();
    }
    createTable(): TableB {
        return new TableB();
    }
}

class AppM {
    private typeFactory!: FactoryM;
    createFactory() {
        this.typeFactory = new FactoryA();
    }
    createChair() {
        this.typeFactory.createChair();
    }
}